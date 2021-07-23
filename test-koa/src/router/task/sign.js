const crypto = require('crypto');

/**
 *
 * @param {string} secret - 加密secret
 * @param {*} data - 加密data
 * @returns
 */
const calcSign = (secret, data) => {
    return crypto
        .createHmac('sha256', secret)
        .update(data)
        .digest('hex');
};

module.exports = {
    calcSign,
};
