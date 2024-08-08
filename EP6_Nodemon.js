const http=require('http')

/*Run app ด้วย nodemon : เมื่อไฟล์เกิดการเปลี่ยนแปลงและถูกบันทึกไฟล์ nodemon จะ restart แอพให้อัตโนมัติ
    การติดตั้ง พิมพ์ npm install nodemon
        การ run พิมพ์ในterminal ว่า  npx nodemon ชื่อไฟล์.js
        หรือ ตั้งค่าใน script โดยพิมพ์ว่า "start":"nodemon./bin/www" ในไฟล์package.jsob และrun โดยใช้ npm start */
        
const server = http.createServer((req,res)=>{
    const pathName=req.url
    console.log(" url=",pathName)
    if(pathName=="/" || pathName=="/home"){
        const myhtml=`
        <h1>Hello Homepage</h1>
        <p style="color:green">Sawadee Kub | 2024</p>`
        res.write(myhtml)
        res.end()
    }else if(pathName=="/product"){
        res.end("<h1>Hello Product</h1>")
    }else{
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }

})

server.listen(3000,'localhost',()=>{             
    console.log("start server in port 3000")
})