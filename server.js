const express = require("express")
const app = express()
const route = require("./Routes/mainRoute")
const path = require ("path")
const counter = require("./Middlewares/Counter")
const exp = require("constants")
app.use("/main", route)
app.use(express.static(path.join(__dirname,'views')))
//app.set('views' , path.join (__dirname,'views'));
//console.log(path.join (__dirname,'views'))
app.set('view engine', 'ejs');



app.listen(5500,(err)=> err? console.log (err): console.log("server is running on port 5500"))


