// © 2024 - BestDeveloper - BestMat, Inc. - All rights reserved
const express = require("express");
const fs = require("fs");
const app = express();

const port = 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Replace with the actual origin of your frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
  
app.get("/", function(req, res){
    res.send("Hello World!");
});

app.post("/createDevBase", function(req, res){
    var email = req.query.email;
    var api_key = req.query.api_key;
    var devbase_name = req.query.devbase_name;

    res.send(`
    Email: ${email}
    API KEY: ${api_key}
    DevBase Name: ${devbase_name}
    `);

    fs.readFile('./devbase.json', function (err, data) {
        var json = JSON.parse(data)
        var new_json = {
            ...json,
            [email]: {
                "api_key": api_key,
                "devbase_name": devbase_name
            }
        }
        
        console.log(json)
        fs.writeFile("devbase.json", JSON.stringify(new_json), function(err) {
            if (err) {
                console.error(err);
            } else {
                console.log("File has been written successfully.");
                fs.writeFile(`${devbase_name}.json`, JSON.stringify({}), function(err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("DevBase has been written successfully.");
                    }
                });
            }
        });
    })
});

app.listen(port, () => console.log("Server running on Port " + String(port)));