const crypto = require('crypto');

const calcSign = (secret, data) => {
    return crypto
        .createHmac('sha256', secret)
        .update(data)
        .digest('hex');
};

module.exports = {
    calcSign,
};
