console.clear()
const fs = require('fs')
const xlsx = require('xlsx')
const path = require('path')
const dirPath = path.join(__dirname,'dataSources')
const fileName = 'clientsPourDistancesTot.xlsx'
const dbConnection = require('./utils/dbConnection')
const dataChecker = require('./utils/dataChecker')
const progress = require('./utils/progress')
dbConnection.connect()

function extractExcelData(dir, fileName){
    const wb = xlsx.readFile(`${dir}/${fileName}`)
    const pageName=wb.SheetNames
    const ws = wb.Sheets[pageName[0]]
    let data = xlsx.utils.sheet_to_json(ws)
    return data
}

function transformDataToMySql(){
    let data = extractExcelData(dirPath, fileName)
    data.forEach(elm =>{
        elm.code_postal = dataChecker.checkElm(elm.code_postal)
        elm.latitude_mag = dataChecker.checkElm(elm.latitude_mag)
        elm.longitude_mag = dataChecker.checkElm(elm.longitude_mag)
        elm.latitude_mag = parseFloat(elm.latitude_mag)
        elm.longitude_mag = parseFloat(elm.longitude_mag)
    })
    return data
}

function loadDataToMySql(){
    let data =  transformDataToMySql()
    let i = 0
    progress.bar.start(data.length,0)
    data.forEach(elm =>{
        progress.bar.update(i)
        mysqlconnection.query(dataChecker.insertToMySql(elm),(err)=>{
            if(!err){
                i++
            }else{
                console.log('data not insert !')
                console.log(err);
            }
        }
        )
    })
    progress.bar.stop();
}
// console.log(progress.bar);
// loadDataToMySql()

function loadDataToMySql2(){
    let data =  transformDataToMySql()
    const dataSize = data.length
    let k = 0
    progress.bar.start(dataSize,0)
    for (let i = 0; i < dataSize; i++) {
        try {
            mysqlconnection.query(dataChecker.insertToMySql(data[i]))
            progress.bar.update(i)
        } catch (error) {
            console.log('data not insert !')
            console.log(error);
        }
//  console.log(k);
    }
    progress.bar.stop();
}

function sendToBar(index,dataSize){
    progress.bar.update(index)
    progress.bar.updateETA()
}

loadDataToMySql2()





