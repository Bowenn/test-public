const Koa = require('koa');
const ReqLogger = require('./class/logger/RequestLogger');

const cors = require('koa2-cors');
const router = require('./router/index.js');

const app = new Koa();
const reqLogger = new ReqLogger('log/request.log');

app
    .use(async (ctx, next) => {
        reqLogger.log(ctx);
        await next();
    });

app
    .use(cors({
        origin: function (ctx) {
            return '*';
        },
    }))
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
