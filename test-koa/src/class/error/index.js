const ERR = require('../../config/error.config');

class WrapError extends Error {
    /**
     *
     * @param {Object} err
     * @param {string} err.name - 错误名，参考err.config
     * @param {Object} err.data - 任意错误data
     */
    constructor(err) {
        super(ERR[err.name].errmsg);
        this.name = err.name;
        this.data = err.data;
    }
}

module.exports = WrapError;
