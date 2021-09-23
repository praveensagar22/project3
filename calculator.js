const express=require("express");
const bodypaser=require("body-parser")
const app=express();
app.use(bodypaser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.listen("5000",function(){
  console.log("server started at port: 2000");
});
app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  res.send("your answer is:"+result);

});
