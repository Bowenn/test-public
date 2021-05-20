const Router = require('@koa/router');
const ERR = require('../config/error');

class wrapRouter extends Router{
    constructor() {
        super();
    }
    get(...args) {
        let middleware = args[args.length - 1];
        args[args.length - 1] = (ctx, next) => {
            try {
                middleware(ctx, next);
                ctx.body = {
                    errno: 0,
                    errmsg: 'success',
                    data: ctx.body
                };
            }
            catch (e) {
                ctx.body = {
                    ...ERR[e.name || 'UNKNOWN'],
                    data: e
                };
            }
        };
        return super.get(...args);
    }
    post(...args) {
        let middleware = args[args.length - 1];
        args[args.length - 1] = (ctx, next) => {
            try {
                middleware(ctx, next);
                ctx.body = {
                    errno: 0,
                    errmsg: 'success',
                    data: ctx.body
                };
            }
            catch (e) {
                ctx.body = {
                    ...ERR[e.name || 'UNKNOWN'],
                    data: e
                };
            }
        };
        return super.post(...args);
    }
}

module.exports = wrapRouter;