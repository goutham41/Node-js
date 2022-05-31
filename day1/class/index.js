const {arr,obj,addFive,str} = require("./anther");

let y = addFive(10)
// console.log(y,obj,arr,str);
const fs =require("fs")
const os = require("os")
fs.readFile(".\\test.txt",{encoding: "utf-8"},(error,data)=>{
   console.log(data)
});

// console.log(os.cpus().length);
// console.log(os.version(), os.arch())
// console.log(os.platform())