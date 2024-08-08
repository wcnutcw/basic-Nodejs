// CallBack Function

const url1="nut.dev/file1.json"
const url2="nut.dev/file2.json"
const url3="nut.dev/file3.json"

dowloading=(url,CallBack)=>{
    console.log(`กำลังโหลด ${url}`)
    setTimeout(()=>{
        CallBack(url)
},1000)}


//CallBack Hell : นำ Callback Function มาซ้อนกันไปเรื่อยๆ จึงควรใช้ Promise 

dowloading(url1,function(result){
    console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
    dowloading(url2,function(result){
        console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
        dowloading(url3,function(result){
            console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
        })       
    })
})
