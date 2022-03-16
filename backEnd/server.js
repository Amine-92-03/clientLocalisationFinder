const app = require('./app')
require('dotenv').config()



app.listen(process.env.PORT, () =>{
    try {
        console.log(`App listent to Port:${process.env.PORT}`);
    } catch (error) {
        console.log('error connecting to the server');
    }
})