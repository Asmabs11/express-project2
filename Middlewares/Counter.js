let count=0
function counter(req,res,next){
    count++
    console.log(count);
    req.count = count
    next()
}

module.exports=counter