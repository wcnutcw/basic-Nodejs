// Blocking
const fs=require("fs")

//อ่านไฟล์
const data=fs.readFileSync("./imyfile/input.txt","utf-8")

console.log(data)

//เขียนไฟล์
const outputText=`Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync("./imyfile/output.txt",outputText)
console.log("เขียนไฟล์เรียบร้อย")