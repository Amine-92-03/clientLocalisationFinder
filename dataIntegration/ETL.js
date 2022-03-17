console.clear()
const fs = require('fs')
const xlsx = require('xlsx')
const path = require('path')
const dirPath = path.join(__dirname,'dataSources')
const fileName = 'clientsPourDistancesTot.xlsx'
const dbConnection = require('./utils/dbConnection')
const dataChecker = require('./utils/dataChecker')
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
    data.forEach(elm =>{
        mysqlconnection.query(dataChecker.insertToMySql(elm),(err)=>{
            if(!err){
                console.log('data well insert !');
            }else{
                console.log('data not insert !')
                console.log(err);
            }
        }
        )
    })
}

loadDataToMySql()










