const express = require('express')
const app = express()

app.get("/home",(req,res)=>{
    res.send("<h1>Hello Express.js</h1>")
})

app.get("/product",(req,res)=>{
    res.send("<h1>Hello Product</h1>")
})

app.listen(3000,()=>{
    console.log("run start at port 3000")
})



