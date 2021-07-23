const Router = require('../../class/router');
const WrapError = require('../../class/error');
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
    })
    .all('/err', ctx => {
        throw new WrapError({
            name: 'UNKNOWN',
        });
    });

module.exports = router;
