const { createRouter } = require('react-router-dom');
const authRouter = createRouter();

authRouter.get('/getUser')
authRouter.post('/register',(req,res,next)=>{
    res.json({msg:'Register...'})
})

module.exports = authRouter

