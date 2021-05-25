const ERR = require('../config/error.config');

class WrapError extends Error {
    constructor(err) {
        super(ERR[err.name].errmsg);
        this.name = err.name;
        this.data = err.data;
    }
}

module.exports = WrapError;
