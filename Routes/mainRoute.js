const express = require ("express")
const router =express.Router()
const path = require ("path")
const counter= require("../Middlewares/Counter")

router.get('/',counter,(req,res) =>{
res.render(path.join(__dirname,"../views/index.ejs"), {requestCount: req.count});
})

router.get('/about',counter,(req,res) =>{
    res.render(path.join(__dirname,"../views/about.ejs"), {requestCount: req.count});
    })
module.exports = router;