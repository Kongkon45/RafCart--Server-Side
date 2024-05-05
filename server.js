const express = require("express");
const cors = require("cors");
const config = require("./config/config.js");
require('./config/db.js')
const topProductsRoute = require("./routes/topProductsRoute.js")

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use("/api", topProductsRoute)

// home route 
app.get("/", (req, res)=>{
    res.status(200).json({message : "Server is ready"})
})
// not found 
app.use((req, res, next)=>{
    res.status(200).json({message : "This url is not found"})
})
// server error 
app.use((err, req, res, next)=>{
    res.status(200).json({message : "Server something broke"})
})

const PORT = config.app.port;
app.listen(PORT, ()=>{
    console.log(`Server is running successfully at http://localhost:${PORT}`);
})