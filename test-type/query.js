"use strict";
exports.__esModule = true;
function qStr2Obj(qStr) {
    return qStr.split('&').reduce(function (res, cur) {
        try {
            var _a = cur.split('='), k = _a[0], v = _a[1];
            res[k] = v;
        }
        catch (e) {
            console.warn('Illegal query', cur, e);
        }
        return res;
    }, {});
}
function parseQuery(query, options) {
    var node = {
        base: query,
        encodedTimes: 0,
        isJSON: false,
        origin: undefined
    };
    if (typeof query === 'string') {
        var value = query;
        try {
            while (true) {
                var t = decodeURIComponent(value);
                if (t !== value && encodeURIComponent(t) === value) {
                    node.encodedTimes++;
                    value = t;
                }
                else {
                    break;
                }
            }
        }
        catch (e) {
        }
        try {
            if (value[0] === '{') {
                query = JSON.parse(value);
                node.isJSON = true;
            }
        }
        catch (e) {
        }
    }
    if (typeof query === 'string') {
        node.origin = query;
    }
    else if (query instanceof Array) {
        node.origin = "[" + query.join(', ') + "]";
    }
    else {
        node.origin = Object.keys(query).reduce(function (res, key) {
            res[key] = parseQuery(query[key], options);
            return res;
        }, {});
    }
    return node;
}
var Query = (function () {
    function Query(query, options) {
        if (typeof query === 'string') {
            this.query = qStr2Obj(query);
        }
        else if (typeof query === 'object') {
            this.query = query;
        }
        else {
            throw new Error('Illegal query: ' + query);
        }
        this.q = parseQuery(this.query, options);
        console.log(this);
    }
    return Query;
}());
exports["default"] = Query;
//# sourceMappingURL=query.js.map