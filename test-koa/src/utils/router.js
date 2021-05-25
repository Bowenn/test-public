const Router = require('@koa/router');
const ERR = require('../config/error.config');

class wrapRouter extends Router {
    constructor() {
        super();
    }

    get(...args) {
        const middleware = args[args.length - 1];
        args[args.length - 1] = (ctx, next) => {
            try {
                middleware(ctx, next);
                ctx.body = {
                    errno: 0,
                    errmsg: 'success',
                    data: ctx.body,
                };
            }
            catch (e) {
                console.log(e);
                ctx.body = {
                    ...ERR[e.name || 'UNKNOWN'],
                    data: e.data,
                };
            }
        };
        return super.get(...args);
    }

    post(...args) {
        const middleware = args[args.length - 1];
        args[args.length - 1] = (ctx, next) => {
            try {
                middleware(ctx, next);
                ctx.body = {
                    errno: 0,
                    errmsg: 'success',
                    data: ctx.body,
                };
            }
            catch (e) {
                ctx.body = {
                    ...ERR[e.name || 'UNKNOWN'],
                    data: e,
                };
            }
        };
        return super.post(...args);
    }
}

module.exports = wrapRouter;
