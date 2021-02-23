 <template>
    <div class="container" @click="clickMain">
        <node-c :doveId="dove.id || ''"  :sex="''" :dove="dove">
        </node-c>
    </div>
</template>

<script>
import NodeC from "./Node";
export default {
    components: {
        NodeC,
    },
    data() {
        return {
            dove: {
                id: "000",
                father: {
                    id: "111",
                    father: {
                        id: "111",
                        father: {
                            id: "111",
                        },
                        mother: {
                            id: "222",
                        },
                    },
                    mother: {
                        id: "222",
                        father: {
                            id: "111",
                        },
                        mother: {
                            id: "222",
                        },
                    },
                },
                mother: {
                    id: "222",
                    father: {
                        id: "111",
                        father: {
                            id: "111",
                        },
                        mother: {
                            id: "222",
                        },
                    },
                    mother: {
                        id: "222",
                        father: {
                            id: "111",
                        },
                        mother: {
                            id: "222",
                        },
                    },
                },
            },
        };
    },
    created() {},
    computed: {},
    methods: {},
};
</script>

<style lang="stylus" scoped>
</style>