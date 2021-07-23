const Logger = require('./index');

const chalk = require('chalk');

class SilenceLogger extends Logger {
    constructor(filePath, options) {
        super(filePath, options);
        this.filePath += '.silence';
    }

    log(ctx) {
        const now = new Date(Date.now()).toString();
        const info = [
            `${chalk.yellow('[req-time: ' + now + ']')}`
        ]
        .concat(Object.keys(ctx).map(k => `[${k}: '${ctx[k]}']`))
        .join('') + '\n';

        super.log(info, { silence: true });
    }
}

class RequestLogger extends Logger {
    constructor(filePath, options) {
        super(filePath, options);
        this.silenceLogger = new SilenceLogger(filePath, options);
    }

    log(ctx) {
        if (ctx.request.method === 'OPTIONS') {
            // OPTIONS请求不打日志
            return
        }
        const now = new Date(Date.now()).toString();
        const info = [
            `${chalk.yellow('[req-time: ' + now + ']')}`,
            `[path: '${ctx.path}']`,
            `[ip: '${ctx.ip}']`,
        ].join('') + '\n';

        super.log(info, {});
        // 完整信息打在静默日志中
        this.silenceLogger.log(ctx);
    }
}

module.exports = RequestLogger;
