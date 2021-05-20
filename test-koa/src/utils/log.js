const requestLog = ctx => {
    const now = new Date(Date.now()).toString();
    const info = [
        `[req-time: '${now}']`,
        `[path: '${ctx.path}']`,
        `[ip: '${ctx.ip}']`
    ];
    console.log(info.join(';;'));
};

module.exports = {
    requestLog
};