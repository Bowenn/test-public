// interface typeA {
//     a: String,
//     b?: Number,
//     c?: Array<Number>
// }

// let a: typeA = {
//     a: 'qwe'
// };

// function myTest(x: typeA):Promise<typeA> {
//     return Promise.resolve({
//         a: x.a,
//         b: 1,
//         d: 2
//     });
// }

// myTest(a).then(console.log);

type Obj = Record<string, unknown>;
type QueryOrigin = string | Record<string, QueryNode>;
interface QueryNode extends Obj {
    base: string | Obj
    encodedTimes: number
    isJSON: boolean
    origin: QueryOrigin
}
interface QueryOptions extends Obj {
    useProxy?: boolean
}

function parseQuery (
    query: string | Obj,
    options?: QueryOptions
): QueryNode {
    const node: QueryNode = {
        base: query,
        encodedTimes: 0,
        isJSON: false,
        origin: undefined
    };
    if (typeof query === 'string') {
        let value = query;
        /* Count for times query was encoded */
        try {
            while (true) {
                const t: string = decodeURIComponent(value);
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
            // unable 2 decode more
            // doNothing
        }

        /* Try for parsing query as a JSON */
        try {
            if (value[0] === '{') {
                query = JSON.parse(value);
                node.isJSON = true;
            }
        }
        catch (e) {
            // not a JSON
            // doNothing
        }
    }

    if (typeof query === 'string') {
        node.origin = query;
    }
    else {
        node.origin = Object.keys(query).reduce(
            (res: Record<string, QueryNode>, key: string): Record<string, QueryNode> => {
                res[key] = parseQuery(query[key], options);
                return res;
            },
            {}
        );
    }
    return node;
}