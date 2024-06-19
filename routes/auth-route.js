const authRouter = {}

authRouter.post('/register',(req,res,next)=>{
    res.json({msg:'Register...'})
})


module.exports = authRouter