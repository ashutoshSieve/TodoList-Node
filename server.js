const express = require("express");
const bodyParser = require("body-parser");

let itemArray =["bath","eat","study"];

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    let today = new Date();
    let option={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day = today.toLocaleDateString("en-US",option);
    res.render("list",{days:day, datas:itemArray});   // variable : value 
});

app.post("/", function(req,res){
    itemArray.push(req.body.newItems);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server is runnig on port 3000!!");
});