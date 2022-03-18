

module.exports.getData = (req,res) =>{
    try {
    const idclient = req.query.clientID
    mysqlconnection.query(`SELECT * FROM clientcoordtable WHERE idclient IN (${idclient}) `,(err,data,fields)=>{
        if(!err){
            res.status(200).json({status_code: 200, message:'data seccessfully got !', body: data})
        }else{
            res.status(401).json({status_code: 200, message:'data not got !', error : err})
        }
    })
    } catch (error) {
        console.log(error);
    }
}