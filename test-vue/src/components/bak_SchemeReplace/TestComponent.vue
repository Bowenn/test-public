 <template>
    <div class="container">
        <div class="input-div">
            <textarea class="textarea" v-model="content" @select="selectText"></textarea>
        </div>
        <div class="text-div">
            <textarea class="textarea" readonly="true" v-model="replacedContent"></textarea>
        </div>
        <div class="mark-div">
            <hr/>
            <p>----- 参数标记（全局） -----</p>
            left: <input class="input" type="text" v-model="mark_l_temp">
            right: <input class="input" type="text" v-model="mark_r_temp">
            <div @click="changeMark">Confirm</div>
        </div>
        <div class="new-attribute-div">
            <hr/>
            <p>----- 新增参数 -----</p>
            <input class="label" type="text" v-model="new_attr.key">
            <input class="input" type="text" v-model="new_attr.v" readonly="true">
            <span class="value">{{ (new_attr.v || (mark_l + new_attr.key + mark_r)).trim() }}</span>
            <div @click="addAttribute">ADD</div>
        </div>
        <div class="attribute-div">
            <hr/>
            <p>----- 已替换的参数 -----</p>
            <p v-for="key in Object.keys(attribute)" :key="key">
                <span class="label">{{ key }}:</span>
                <input class="input" type="text" v-model="attribute[key]">
                <span class="value">{{ (attribute[key] || (mark_l + key + mark_r)).trim() }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: '',
            // reg: /{{([ '"-/\w]*)(?:=(.*?))?}}/g,
            reg: null,
            mark_l: '{{',
            mark_r: '}}',
            mark_l_temp: '{{',
            mark_r_temp: '}}',
            attribute: {
                id_aaa: '[IDAAAAA]',
                id_bbb: '[IDBBB]',
                id_ccc: '[IDC]',
                id_ddd: undefined
            },
            new_attr: {
                a: undefined,
                b: undefined,
                key: '',
                v: ''
            },
            replaced: []
        };
    },
    created(){
        this.reg = new RegExp(this.mark_l + '([ \'"-/\\w]*)(?:=(.*?))?' + this.mark_r, 'g')
    },
    computed: {
        replacedContent: function() {
            return this.content.replace(this.reg, this.replaceFunc);
        }
    },
    methods: {
        replaceFunc(...args) {
            // 用于展示正则替换后的结果
            let [match, p1, p2] = args;
            return (this.attribute[p1] || p2 || match).trim();
        },
        selectText(e) {
            // 选中部分文本建立新的属性
            let {selectionStart: a, selectionEnd: b, value} = e.target;
            let v = value.slice(a, b)

            if (v.indexOf(this.mark_l) >=0 || v.indexOf(this.mark_r) >=0) {
                // 选中文本中包含左右标记（默认为'{{'和'}}'）判定为无效选取置
                this.new_attr = {
                    a: undefined,
                    b: undefined,
                    key: '',
                    v: ''
                };
                return;
            } 

            this.new_attr = {a, b, v, key:''};
        },
        changeMark() {
            let reg_temp = new RegExp(this.mark_l + '(' + Object.keys(this.attribute).join('|') + ')' + this.mark_r, 'g');

            this.mark_l = this.mark_l_temp;
            this.mark_r = this.mark_r_temp;

            this.content = this.content.replace(reg_temp, (...args) => {
                let p1 = args[1];
                return this.mark_l + p1 + this.mark_r;
            });

            this.reg = new RegExp(this.mark_l + '([ \'"-/\\w]*)(?:=(.*?))?' + this.mark_r, 'g')
        },
        addAttribute() {
            if (!this.new_attr.key || !this.new_attr.v) {
                // 新增值的Key或Value为空
                return;
            }
            else if (this.attribute[this.new_attr.key]) {
                // 属性已经存在
                return;
            }
            else {
                // 正常添加属性并替换字符串
                this.$set(this.attribute, this.new_attr.key, this.new_attr.v);
                this.content = this.content.slice(0, this.new_attr.a)
                            + this.mark_l + this.new_attr.key + this.mark_r
                            + this.content.slice(this.new_attr.b, this.content.length);
                this.new_attr = {
                    a: undefined,
                    b: undefined,
                    key: '',
                    v: ''
                };
                return;
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
.container
    width 100vw
    height 100vh
    & > div
        margin-bottom 10px
    .textarea
        width 300px
        height 100px
    .mark-div
    .new-attribute-div,
    .attribute-div
        .label
            display inline-block
            width 100px
        .value
            display inline-block
            width 160px
            color #68a1f6
        .input
            width 200px
            margin 0 15px
</style>