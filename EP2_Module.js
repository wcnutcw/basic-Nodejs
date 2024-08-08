
getCurrentTime=()=>{
    return new Date()
}

add=(x,y)=>x+y

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
}

// ส่งออกคำสั่งไปใช้
module.exports.getCurrentTime=getCurrentTime
module.exports.add=add 
module.exports.formatNumber=formatNumber 

