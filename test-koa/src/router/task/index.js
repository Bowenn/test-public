const Router = require('../../utils/router');
const Sign = require('./sign');
const router = new Router();
const WrapError = require('../../utils/error');

router
    .get('/sign', ctx => {
        if (ctx.query.secret && ctx.query.data) {
            try {
                ctx.body = {
                    sign: Sign.calcSign(ctx.query.secret, ctx.query.data),
                };
            }
            catch (e) {
                throw new WrapError({
                    name: 'SIGN_FAIL',
                    data: {
                        ...ctx.query,
                    },
                });
            }
        }
        else {
            throw new WrapError({
                name: 'ARGUMENT_MISSED',
                data: {
                    ...ctx.query,
                },
            });
        }
    });

module.exports = router;
