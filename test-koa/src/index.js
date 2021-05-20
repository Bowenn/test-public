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

let secret = "31850dbd-ed31-cfcf-fe0c-e84582de2f23"
let data = "requestId=15780339107230036&token=dbbbd80496d1592404d86547bfff9a098e6c8c692e1af5fad6a0e45614"
