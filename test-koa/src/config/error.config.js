const ERR = {
    UNKNOWN: {
        errno: -1,
        errmsg: 'server unknown err',
    },
    // 必要参数缺失
    ARGUMENT_MISSED: {
        errno: 1001,
        errmsg: 'necessary argument missed',
    },
    // 任务签名生成失败
    SIGN_FAIL: {
        errno: 2001,
        errmsg: 'failed in calculating sign value',
    },
};

module.exports = ERR;
