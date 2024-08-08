const http=require('http')

const server = http.createServer((req,res)=>{
    const myhtml=`
    <h1>Hello World</h1>
    <p>Sawadee Kub | 2024</p>`

    res.write(myhtml)
    res.end()
})

server.listen(3000,'localhost',()=>{              // ตรงตำแหน่ง 'localhost' คือ กำหนดชื่อ host
    console.log("start server in port 3000")
})