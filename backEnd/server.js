const app = require('./app')
const dbConnection = require('./utils/dbConnection')
require('dotenv').config()
dbConnection.connect()


app.listen(process.env.SERVERPORT, () =>{
    try {
        console.log(`App listent to Port:${process.env.SERVERPORT}`);
    } catch (error) {
        console.log('error connecting to the server');
    }
})

