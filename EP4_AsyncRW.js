//Non-Blocking

const fs=require("fs")

//อ่านไฟล์  //เขียนไฟล์  
fs.readFile("./imyfile/input.txt","utf-8",(err,data)=>{
    if(err) return console.log("เกิดข้อผิดพลาด",err)
        const outputText=`Hello Node.js\n${data}\nไฟล์นี้ถูกเขียนเมื่อ${new Date()}`
    fs.writeFile("./imyfile/output.txt",outputText,err=>{
     if(err) return console.log("เกิดข้อผิดพลาด",err)
        console.log("เขียนไฟล์เรียบร้อย!")
    })
})

console.log("จบการทำงาน")

