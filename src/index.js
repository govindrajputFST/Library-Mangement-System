const express=require("express");
const mongoose=require("mongoose");
// const route = require("./routes/route");
const app=express();
require ("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.URL).then(()=>console.log("MongoDb connected succesfully")).catch((err)=>console.log(err));
// app.use("/",route);
app.listen(6000,()=>{
    console.log("server started on this port -> " + 6000);
})