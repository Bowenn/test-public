function test(a) {
    if (typeof a === 'string') {
        return a;
    }
    else {
        return Object.keys(a).reduce(function (res, key) {
            return res + key + a[key];
        }, '');
    }
}
//# sourceMappingURL=index.js.map