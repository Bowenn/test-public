interface typeA {
    a: String,
    b?: Number,
    c?: Array<Number>
}

let a: typeA = {
    a: 'qwe'
};

function myTest(x: typeA):Promise<typeA> {
    return Promise.resolve({
        a: x.a,
        b: 1,
        d: 2
    });
}

myTest(a).then(console.log);