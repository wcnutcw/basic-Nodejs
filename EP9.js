const express = require('express')
const router = require('./myrouter/myRouter')

const app = express()
app.use(router)

app.listen(4000,()=>{
    console.log("run start at port 4000")
})