const express=require("express");
const app=express();
const PORT=3000;

app.get("/",(req, res)=>{
    res.send("Hello world, let's go Docker");
})

app.listen(process.env.PORT || PORT, ()=>console.log(`Server is listening and running on ${PORT}`))