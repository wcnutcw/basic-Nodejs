// Async & Await
//Await : //Await : รอให้ขั้นตอนนี้ทำงานเสร็จก่อนแล้วค่อยไปขั้นตอนต่อไป


const connect= true
const url1="nut.dev/file.json"
const url2="nut.dev/file2.json"
const url3="nut.dev/file3.json"
const url4="nut.dev/file4.json"
const url5="nut.dev/file5.json"

dowloading=(url)=>{
    return new Promise(function(resolve,reject){
        console.log(`กำลังโหลดไฟล์จาก ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`โหลด ${url} เรียบร้อย`)
            }else{
                reject(`เกิดข้อผิดพลาด`)
            }
        },1000)
    })
}

async function start(){
    console.log(await dowloading(url1))
    console.log(await dowloading(url2))
    console.log(await dowloading(url3))
    console.log(await dowloading(url4))
    console.log(await dowloading(url5))
}

start()

// api ภาพสินค้า (backend) -> frontend (แสดงภาพในเว็บ)
// api (promise) -> pending -> รอข้อมูลมาครบ(await) -> แสดงภาพ

