 <template>
    <div>
        <img :src="url" />
    </div>
</template>

<script>
import QRCode from 'qrcode';
export default {
    components: {
    },
    data() {
        return {
            url: ''
        };
    },
    created() {},
    computed: {},
    async mounted() {
        this.toDataURL();
    },
    methods: {
        toDataURL() {
            let str = 'Bestpay://web?url=https://h5.bestpay.cn/subapps/redbagCombo/bargain-activity/main.html?hybridVersion=3.0&activityNo=20210119095541018114690151716489&bp_token=!(token)';
            return QRCode.toDataURL(str, {
                errorCorrectionLevel: 'H'
            }).then(res => {
                this.url = res;
            }, () => {
                this.url = 'failed';
            });
        }
    },
};
</script>

<style lang="stylus" scoped>
</style>