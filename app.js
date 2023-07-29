const express=require("express");
// const https=require("https");
const bodyParser=require("body-parser");
const { log } = require("console");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.get("/",function(req,res){

  res.sendFile(__dirname+"/clubsofbms.html");


});
app.post("/",function(req,res){
  var name=req.body.email;
  console.log(name);
})
app.get("/registration.html",function(req,res)
{
  res.sendFile(__dirname+"clubsofbms.html");
});

app.post("/registration.html",function(req,res){
  var email=req.body.email;
  var name=req.body.name;
  console.log(name);
  console.log(email);
  res.send("Thanks for registering");

})

app.listen(3000,function()
{

console.log("Server is running on port 3000");
});