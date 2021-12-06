<template>
    <div>
        <div
            v-for="v, key in obj"
            :key="key"
            :style="{
                'padding-left': 10 * level + 'px'
            }"
        >
            <!-- object -->
            <div v-if="v.origin instanceof Object && !(v.origin instanceof Array)">
                {{key}} -
                <obj-node
                    :o="v.origin"
                    :level="level + 1"
                    @update="updateHandler"
                />
            </div>
            <!-- normal -->
            <div v-else>
                {{key}} - <input :value="v.origin" @change="inputValue"></input>({{v.base}})
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ObjNode',
    props: {
        o: {
            type: Object,
            default: () => {}
        },
        level: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            obj: this.o
        }
    },
    watch: {
        obj: function (v, old) {
            this.$emit('update', v);
        }
    },
    methods: {
        updateHandler(v) {
            console.log(v);
            this.obj = v;
        },
        inputValue(e) {
            console.log(e.target.value);
        }
    }
}
</script>