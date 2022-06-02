// import express from "express"
const express = require("express");
const fs = require("fs");
// for creating server 
const app = express();
  app.use(express.urlencoded({extended:true}))
  app.use(express.json())
//
app.get("/",(req,res)=>{
     res.setHeader("Content-Type", "application/json");

    res.end("hello world")
})
//
app.get("/products", (req, res) => {
     res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify({a:"a",b:"b"}));
});
// sending the data server
app.post("/products",(req,res)=>{
    console.log(req.body)
    // res.end("Products Created");
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.products = [...parsed.products,req.body]
    
      
    fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
        res.end("Product created")
    })
        })
    
})
// updating Products



// delete Products
app.delete("/product/:id",(req,res)=>{
   
    // 1. Read the db.json
    // 2. get the products array , find "id" from it
    // 3. remove that id from array;
    // 4. write the filtered data to db.json
        const { id } = req.params;
       fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
         const parsed = JSON.parse(data);
         parsed.products = parsed.products.filter((el)=> el.id !== id);
         
             fs.writeFile(
               "./db.json",
               JSON.stringify(parsed),
               { encoding: "utf-8" },
               () => {
                 res.end("Product deleted");
               },
             );
       });
})


app.listen(3000,()=>{
    console.log("server started on https://localhost:3000/")
})

//
