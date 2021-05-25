const Router = require('../utils/router');
const check = require('./check');
const task = require('./task');

const router = new Router();

router
    .use('/check', check.routes(), check.allowedMethods())
    .use('/task', task.routes(), check.allowedMethods())
    .get('/mock', ctx => {
        ctx.body = {
            mockData: 'mock mock mock mock mock',
        };
    });
module.exports = router;
