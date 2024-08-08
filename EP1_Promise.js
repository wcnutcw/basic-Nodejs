// Promise 

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

// Promise then
dowloading(url1).then(function(result){
    console.log(result)
    return dowloading(url2)        // return ค่าออกไปที่ then
}).then(function(result){
    console.log(result)
    return dowloading(url3)         // return ออกไปที่ then
}).then(function(result){
    console.log(result)
}).catch(err=>{
    console.log(err)
})




// **Promise Hell : เขียนซ้อนกัน แต่มีการใช้ then catch finally
// dowloading(url1).then(function(result){
//     console.log(result)
//     dowloading(url2).then(function(result){
//         console.log(result)
//         dowloading(url3).then(function(result){
//             console.log(result)
//         })
//     })
// }).catch(err=>{
//     console.log(err)
// })


// dowloading(url1).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("จบการทำงาน")
// })