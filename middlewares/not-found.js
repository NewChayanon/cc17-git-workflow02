module.exports = (req,res,next)=>{
    return res.status(404).json({msg:"404 Not Found"})
}