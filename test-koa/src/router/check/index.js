const Router = require('../../utils/router');
const router = new Router();

router
    .all('/', ctx => {
        ctx.body = {
            errno: 0,
            data: 'Hello World!',
            errmsg: 'success',
        };
    })
    .all('/test', ctx => {
        ctx.body = {
            errno: 0,
            data: 'test',
            errmsg: 'success',
        };
    });

module.exports = router;
