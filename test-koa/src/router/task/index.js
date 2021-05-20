const Router = require('../../utils/router');
const Sign = require('./sign');
const router = new Router();

router
    .get('/sign', ctx => {
        if (ctx.query.secret && ctx.query.data) {
            const sign = '';
            try {
                ctx.body = {
                    sign: Sign.calcSign(ctx.query.secret, ctx.query.data)
                }
            }
            catch (e) {
                throw {
                    name: 'SIGN_FAIL',
                    secret: ctx.query.secret,
                    data: ctx.query.data
                }
            }
        }
        else {
            throw {
                name: 'ARGUMENT_MISSED',
                query: ctx.query
            }
        }
    })

module.exports = router;

