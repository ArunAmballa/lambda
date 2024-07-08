const express=require("express")
const serverless=require("serverless-http");

const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})
app.get("/health",(req,res)=>{
    res.send("Healthy")
})


module.exports.handler=serverless(app)
