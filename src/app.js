const express = require("express");
const connectDB=require("./config/database")
const app = express();
const User=require("./models/user")
app.post("/signup",async (req,res)=>{
    
    // Creating a new instance of the user Model
    const user = new User({firstName:"Hari",
        lastName:"Kishore",
        emailId:"harikishore99@gmail.com",
        password:"123$Hari"
      })
    try{
    await user.save()
    res.send("User Added succesfully")
    }
    catch(err){
        res.status(400).send("Error saving the user"+err.message)
    }
})

connectDB()
.then(()=>{
   console.log("Database connected successfully")
   app.listen(3000,()=>{
    console.log("Server on port 3000")
});
})
.catch(err=>{
   console.log("Database cannot be connected")
})
