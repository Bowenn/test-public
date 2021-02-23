 <template>
    <div class="container" @click="clickMain">
        <div id="div1" @click="clickDiv1"></div>
        <div id="div2" @click="clickDiv2">
            <div id="div3" @click="clickDiv3">
                <div id="div4" @click="clickDiv4"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: null
        };
    },
    created(){
    },
    computed: {
    },
    methods: {
        clickMain(e) {
            console.log('[click Main::]', e);
        },
        clickDiv1(e) {
            let div2 = document.getElementById('div2');
            let newE = new MouseEvent('click', e);
            div2.dispatchEvent(newE);
            console.log('[click Div1::]', e);

        },
        clickDiv2(e) {
            console.log('[click Div2::]', e);
        },
        clickDiv3(e) {
            console.log('[click Div3::]', e);
        },
        clickDiv4(e) {
            console.log('[click Div4::]', e);
        }
    }
};
</script>

<style lang="stylus" scoped>
.container
    width 100vw
    height 100vh
    #div1
        // position absolute
        background #ddddfe
        width 20vw
        height 20vh
        opacity .3
    #div2
        background #ddfedd
        width 20vw
        height 20vh
    #div3
        background #fedddd
        width 10vw
        height 10vh
    #div4
        background #ccccfa
        width 5vw
        height 5vh
</style>