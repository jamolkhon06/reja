const http = require('http');
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://jamolxonsiddikovich_db_user:ShzkXzDf8EQ5L8Gb@cluster0.uttsopb.mongodb.net/REJA";
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) console.error("ERROR on connection MongoDB", err);
    else {
        console.log("MongoDB connection successful");
        module.exports = client;
        
        const app = require('./app');
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, () => {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        })
    }
})