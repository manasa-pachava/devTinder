const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello from the servr")
});

app.listen(3000,()=>{
    console.log("Server on port 3000")
});