var express = require('express');
var app = express();

app.get("/api/timestamp",(req,res)=>{
  res.json({unix:Date.now(),utc:Date()});
});

app.get("/api/timestamp/:date_string",(req,res)=>{
let dateString=req.params.date_string;
  let dateInt=parseInt(dateString);
  if(/\d{5,}/.test(dateString))
    {
      res.json({unix:dateString,utc:new Date(dateInt).toUtcString});
    }
  let dateO=new Date(dateString)
  if(dateO.toString()==="Invalid Date")
    {
      res.json({error: "Invalid Date"});
    }
  else{
    res.json({unix: dateO.valueOf(),utc: dateO.toUTCString()});
  }
});
module.export=app;