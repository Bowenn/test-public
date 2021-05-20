const Router = require('../../utils/router');
const router = new Router();

router
    .get('/', ctx => {
        ctx.body = {
            errno: 0,
            data: 'Hello World!',
            errmsg: 'success'
        };
    })
    .get('/test', ctx => {
        ctx.body = {
            errno: 0,
            data: 'test',
            errmsg: 'success'
        };
    })
    .post('/', ctx => {
        ctx.body = {
            errno: 0,
            data: 'Hello World!',
            errmsg: 'success'
        };
    });

module.exports = router;

