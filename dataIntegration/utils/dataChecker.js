module.exports.checkElm = (elm)=>{
    if(elm == '' || elm == null || elm == NaN || elm == 'Na' || elm == 'NA' || elm == 'NaN'){
        return -9999
    }
    return elm
}
module.exports.insertToMySql = (data)=>{
    return `INSERT INTO clientcoordtable(codePostal,codePays,latitudeMag,longitudeMag) VALUES( ${data.code_postal},'${data.code_pays}',${data.latitude_mag},${data.longitude_mag})`
}