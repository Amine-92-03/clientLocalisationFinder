const app = require('./app')
require('dotenv').config()
const dbConnection = require('./utils/dbConnection')

dbConnection.connect()

app.listen(process.env.SERVERPORT, () =>{
    try {
        console.log(`App listent to Port:${process.env.SERVERPORT}`);
    } catch (error) {
        console.log('error connecting to the server');
    }
})

