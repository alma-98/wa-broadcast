const express = require("express");

const app = express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/",(req,res)=>{
res.send("<h1>🚀 WA Broadcast Pro</h1><h3>Investment Technology Indonesia</h3>");
});

app.listen(3000,()=>{
console.log("Server Running");
console.log("http://localhost:3000");
});
