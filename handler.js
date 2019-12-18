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

app.delete("/pharmacies/:id", function (req, res){
    const id = req.params.id;
    const sql = "DELETE FROM pharmacies WHERE id = ?";
    connection.query(sql, [id], function (err, data){
        if(err){
            res.status(5000).json({error: err});
        }else{
            res.sendStatus(200)
        }
    });
});

app.put("/pharmacies/:id", function (req, res){
    const id = req.params.id;
    const pharmacy = req.body;
    const sql = "UPDATE pharmacies SET name = ?, town = ?, late = ?, vaccine = ?, delivery = ?, e_pres = ?, location = ?, date = ? WHERE id =?";
    const values = [pharmacy.name, pharmacy.town, pharmacy.late, pharmacy.vaccine, pharmacy.delivery, pharmacy.e_pres, pharmacy.location, pharmacy.date, id];
    connection.query(sql, values, function (err, data){
        if (err){
            res.status(500).json({error: err});

        }else{
            res.status(205).json({pharmacy: data});
        }
    });

});

module.exports.pharmacies = serverless(app);



