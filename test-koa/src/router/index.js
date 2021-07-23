const Router = require('../class/router');
const check = require('./check');
const task = require('./task');
const mockData = require('../../mock/mockData.js');

const router = new Router();

router
    .prefix('/api')
    .use('/check', check.routes(), check.allowedMethods())
    .use('/task', task.routes(), check.allowedMethods())
    .all('/mock', ctx => {
        const mock = ctx.query.mock;
        if (mock && mockData[mock]) {
            ctx.body = mockData[mock];
        }
        else {
            ctx.body = {
                a: 19221,
                b: 'qwe',
                c: {
                    d: true,
                    e: null,
                },
                f: JSON.stringify({ g: 'asd', h: -30 }),
                i: [
                    { j: '0', k: 'zxc' },
                    { j: '0', k: 'zxc' },
                    { j: '0', k: 'zxc' },
                    { j: '0', k: 'zxc' },
                ],
            };
        }
    });
module.exports = router;
