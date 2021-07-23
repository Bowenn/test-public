const Router = require('@koa/router');
const ERR = require('../../config/error.config');

const warpMethod = (...args) => {
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
    return args;
};

class wrapRouter extends Router {
    constructor() {
        super();
    }

    get(...args) {
        return super.get(...warpMethod(...args));
    }

    post(...args) {
        return super.post(...warpMethod(...args));
    }

    all(...args) {
        return super.all(...warpMethod(...args));
    }
}

module.exports = wrapRouter;
