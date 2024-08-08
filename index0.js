const mymodules =require("./EP2_Module.js")
const getCurrentTime =require("./EP2_Module.js").getCurrentTime
const plus =require("./EP2_Module.js").add
const Number=5000000

console.log(mymodules.getCurrentTime())
console.log(mymodules.add(50,100))
console.log(getCurrentTime())
console.log(plus(100,200))
console.log(mymodules.formatNumber(Number))