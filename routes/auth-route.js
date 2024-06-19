const { createRouter } = require('react-router-dom');

const authRouter = createRouter();

authRouter.get('/getUser')

module.exports = authRouter;