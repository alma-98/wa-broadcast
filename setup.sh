#!/bin/bash

echo "== Install Package =="
npm install express ejs multer axios dotenv exceljs cli-progress chalk

echo "== Create Folder =="
mkdir -p \
controllers \
routes \
services \
config \
views/layouts \
views/pages \
public/css \
public/js \
public/images \
uploads \
templates \
logs \
output

echo "== Create Files =="
touch controllers/broadcastController.js
touch routes/web.js
touch services/wapis.js
touch services/broadcast.js
touch services/excel.js
touch config/config.js

cat > server.js <<'END'
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
END

cat > views/pages/index.ejs <<'END'
<h1>WA Broadcast Dashboard</h1>
END

cat > public/css/style.css <<'END'
body{
font-family:Arial;
padding:40px;
background:#f5f5f5;
}
END

cat > public/js/app.js <<'END'
console.log("WA Broadcast");
END

echo "== Git =="

git add .
git commit -m "feat: setup express project"
git push origin develop

echo "== Finish =="

echo "Run:"
echo "node server.js"

