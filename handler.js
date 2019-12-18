const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "finder"
});

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get("/pharmacies", function(req, res) {
    connection.query("SELECT * FROM pharmacies", function(err, data){
        if(err){
            console.log("Error fetching pharmacies", err);
            res.status(500).json({error: er});
        } else {
            res.status(200).json(data);
        }
    });
});

app.post("/pharmacies", function(req, res) {
    const pharmacy = req.body;
    const sql = "INSERT INTO pharmacies SET ?";
    connection.query(sql, pharmacy, function (err, data){
        if(err){
            res.status(500).json({error: err});
        }else{
            pharmacy.id = data.insertId;
            res.status(201).json(pharmacy);
        }
    });
});

module.exports.pharmacies = serverless(app);



