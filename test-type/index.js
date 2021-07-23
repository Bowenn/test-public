var a = {
    a: 'qwe'
};
function myTest(x) {
    return Promise.resolve({
        a: x.a,
        b: 1,
        d: 2
    });
}
myTest(a).then(console.log);
//# sourceMappingURL=index.js.map