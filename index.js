const connection = require('./db') 
const dotenv = require('dotenv')

console.log("Hello world");

// Connect to Database
connection();
dotenv.config()