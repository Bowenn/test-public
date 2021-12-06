 <template>
    <div>
        <obj-node
            :o="query"
            :level="10"
            style="text-align: left"
        />
    </div>
</template>

<script>
import ObjNode from './ObjNode.vue';
export default {
    components: {ObjNode},
    data() {
        return {
            head: '',
            path: [''],
            query: {}
        };
    },
    created() {
        this.solveScheme();
    },
    computed: {},
    mounted() {},
    methods: {
        solveScheme() {
            const parseEncodedJson = s => {
                const base = s;
                let encodedCount = 0;
                let jsonfied = false;

                /* Count for times s was encoded */
                try {
                    while (decodeURIComponent(s) !== s && encodeURIComponent(decodeURIComponent(s)) === s) {
                        encodedCount++;
                        s = decodeURIComponent(s);
                    }
                }
                catch (e) {
                    // unable 2 decode more
                    // doNothing
                }

                /* Try for parsing s as a JSON */
                try {
                    if (s[0] === '{') {
                        s = JSON.parse(s);
                        jsonfied = true;
                    }
                }
                catch (e) {
                    // not a JSON
                    // doNothing
                }

                /* Check if s is a parseable Object */
                if (s instanceof Array) {
                    // if s is an Array, we should jsonfy it
                    jsonfied = true;
                    s = JSON.stringify(s);
                }
                else if (s instanceof Object) {
                    Object.keys(s).forEach(k => {
                        s[k] = parseEncodedJson(s[k]);
                    });
                }
                else {

                }

                /* Success in parsing s */
                return {
                    base, // before parse
                    origin: s, // after parse
                    encodedCount, // times been encoded for
                    jsonfied // jsonfied or not
                };
            };

            const qStr2Obj = qStr => {
                if (!qStr) {
                    return null;
                }
                return qStr.split('&').reduce((res, cur) => {
                    try {
                        const [k, v] = cur.split('=');
                        res[k] = parseEncodedJson(v);
                    }
                    catch (e) {
                        console.warn('Illegal query', cur, e);
                    }
                    return res;
                }, {});
            };

            const solveScheme = s => {
                try {
                    const head = s.split('://')[0];
                    if (!head) {
                        throw new Error('scheme head not found');
                    }
                    const body = s.split('://')[1];
                    const path = body.split('?')[0].split('/');
                    const qStr = body.split('?')[1] || '';
                    const query = qStr2Obj(qStr);
                    console.log(head, path, query);
                    return {head, path, query};
                }
                catch (e) {
                    console.warn('Illegal scheme', e);
                }
            };

            let a = {x: 1, y: 2};
            let b = {m: a, n: [1,2,'2']};
            let c = encodeURIComponent(JSON.stringify(b));
            let d = {a: encodeURIComponent('啊谁说的哇'), c};
            let e = encodeURIComponent(JSON.stringify(d));
            let f = {e, x: 100};
            let g = 'test://P1_p1/p2ppp2/p3333?g=h&j=k&l=' + encodeURIComponent(JSON.stringify(f));
            const res = solveScheme(g);
            this.head = res.head;
            this.path = res.path;
            this.query = res.query;
        }
    },
};
</script>

<style lang="stylus" scoped>
button
    margin 10px
</style>