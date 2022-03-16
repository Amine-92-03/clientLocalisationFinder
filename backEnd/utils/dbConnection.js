const mysql = require('mysql')
require('dotenv').config()
dbConfig = {
    host: process.env.SERVER,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database : process.env.DATABASE,
    port: process.env.PORT
}

module.exports.connect = ()=>{
    try {
    mysqlconnection = mysql.createConnection(dbConfig)
    mysqlconnection.connect()
    console.log('Connected to DB sucessfully !');
    } catch (error) {
        mysqlconnection.connect((err)=>{
               console.log('db connection failed \n'+ JSON.stringify(err));
            })
    }
}