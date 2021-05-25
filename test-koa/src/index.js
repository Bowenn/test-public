const Koa = require('koa');
const router = require('./router/index.js');
const log = require('./utils/log.js');

const app = new Koa();

app
    .use(async (ctx, next) => {
        log.requestLog(ctx);
        await next();
    });
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
