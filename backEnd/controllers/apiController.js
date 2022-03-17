

module.exports.getData = (req,res) =>{
    try {
    const emp_id = req.query.EmpID
    mysqlconnection.query(`SELECT * FROM clientcoordtable WHERE idclient IN (${emp_id})`,(err,data,fields)=>{
        if(!err){
            res.status(200).json({status_code: 200, message:'data seccessfully got !', body: data})
        }else{
            res.status(401).json({status_code: 200, message:'data not got !'})
        }
    })
    } catch (error) {
        console.log(error);
    }
}