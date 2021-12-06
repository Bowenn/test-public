type Base = number | string | boolean;
type Obj = Record<string, unknown>;
type QueryOrigin = string | Record<string, QueryNode>;
interface QueryNode extends Obj {
    base: Base | Obj
    encodedTimes: number
    isJSON: boolean
    origin: QueryOrigin
}
interface QueryOptions extends Obj {
    useProxy?: boolean
}

function qStr2Obj (qStr: string): Obj {
    return qStr.split('&').reduce(
        (res: Obj, cur: string): Obj => {
            try {
                const [k, v]: string[] = cur.split('=');
                res[k] = v;
            }
            catch (e) {
                console.warn('Illegal query', cur, e);
            }
            return res;
        },
        {}
    );
}

function parseQuery (
    query: unknown,
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
    else if (query instanceof Array) {
        node.origin = `[${query.join(', ')}]`;
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

class Query {
    query: Obj
    q: QueryNode
    constructor(query: string | Obj, options?: QueryOptions) {
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
}



export default Query;