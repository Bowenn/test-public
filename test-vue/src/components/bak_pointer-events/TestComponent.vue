 <template>
    <div>
        <div class="container" @click="clickDiv">
            <div id="div1" class="div1" @click="clickDiv1">
                <div class="div11"></div>
                <div class="div22"></div>
                <div class="div33"></div>
            </div>
            <div id="div2" class="div2" @click="clickDiv2">
                <div class="mask-div div11"></div>
                <div class="mask-div div22"></div>
                <!-- <div class="mask-div div33"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
        };
    },
    created() {},
    computed: {},
    mounted() {},
    methods: {
        // clickDiv(e) {
        //     console.log('clicked Main', e, e.target);
        // },
        clickDiv1(e) {
            console.log('[clicked:::] Div1', e, e.target);
        },
        clickDiv2(e) {
            console.log('[clicked:::] Div2', e, e.target);
        }
    },
};
</script>

<style lang="stylus" scoped>
.container
    position relative
    #div1
        width 100%
        height 900px
        position relative
        background #cedef6
        opacity .8
        pointer-events none
        z-index 2
    #div2
        width 100%
        height 100%
        top 0
        left 0
        position absolute
        z-index 1
        .mask-div
            background yellow !important 
            transform scale(1.5)

// .container
//     position relative
//     #div1
//         width 100%
//         height 900px
//         position relative
//         background #cedef6
//         // opacity .8
//         // pointer-events none
//     #div2
//         width 100%
//         height 100%
//         top 0
//         left 0
//         position absolute
//         pointer-events none
//         opacity .2
//         // z-index -1
//         .mask-div
//             background yellow !important 
//             transform scale(1.5)
//             pointer-events auto

.div11
    width 100px
    height 100px
    position absolute
    top 200px
    left 500px
    background linear-gradient(45 deg, blue, transparent)
.div22
    width 120px
    height 170px
    position absolute
    top 600px
    left 300px
    background linear-gradient(-135 deg, red, transparent)
.div33
    width 220px
    height 170px
    position absolute
    top 400px
    left 600px
    background linear-gradient(-45 deg, green, transparent)
</style>