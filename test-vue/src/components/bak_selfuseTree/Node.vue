<template>
    <div :class="{ 'border-m': sex === 'M', 'border-f': sex === 'F' }">
        <div class="container">
            <!-- <div class="line-0"></div> -->
            <slot></slot>
            <div class="child">
                <div class="info">
                    <div>{{ dove.id }}</div>
                </div>
            </div>
            <div class="parents">
                <ocrnodes :dove="dove.father" :sex="'M'">
                    <div class="line-0"></div>
                </ocrnodes>
                <ocrnodes :dove="dove.mother" :sex="'F'">
                    <div class="line-0"></div>
                </ocrnodes>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ocrnodes",
    props: {
        doveId: {
            type: String,
            default: "",
        },
        sex: {
            type: String,
            default: "F",
        },
        dove: Object,
    },
};
</script>

<style lang="stylus" scoped>
.border-f
    padding-left 1px
    background-image linear-gradient(#000000 0%, #000000 50%, #ffffff 50%, #ffffff 100%)
.border-m
    padding-left 1px
    background-image linear-gradient(#ffffff 0%, #ffffff 50%, #000000 50%, #000000 100%)

.line-0
    width 20px
    height 1px
    background-color #666666
.container
    background #ffffff
    display flex
    justify-content center
    align-items center
    .child
        display flex
        justify-content center
        align-items center
</style>