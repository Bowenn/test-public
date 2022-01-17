<template>
    <div class="container" 
            @mousemove="dragHandler"
            @mouseup="endDrag">
        <div
            class="drag-div"
            :style="{
                top: `${y}px`,
                left: `${x}px`,
            }"
            draggable="false"
            @mousedown="startDrag"
            @dragstart="dragStartHandler"
            @dragend="dragEndHandler"
        ><span>拖动测试</span></div>
    </div>
</template>

<script>
let e1 = null;
let e2 = null;
export default {
    data() {
        return {
            dragging: false,
            x: 100,
            y: 50
        }
    },
    methods: {
        startDrag() {
            console.log('start drag');
            this.dragging = true;
        },
        dragHandler(e) {
            if (this.dragging) {
                console.log(e);
                this.x = this.x + e.movementX;
                this.y = this.y + e.movementY;
            }
        },
        endDrag() {
            console.log('end drag');
            this.dragging = false;
        },
        dragStartHandler(e) {
            // console.log('drag start');
            // e1 = e;
            // console.log(e.offsetX, e.offsetY, e.clientX, e.clientY, e.screenX, e.screenY, e.pageX, e.pageY);
        },
        dragEndHandler(e) {
            // e2 = e;
            // // console.log(e.offsetX, e.offsetY, e.clientX, e.clientY, e.screenX, e.screenY, e.pageX, e.pageY);
            // console.table(
            //     ['offsetX', 'offsetY', 'clientX', 'clientY', 'screenX', 'screenY', 'pageX', 'pageY'].map(key => ([
            //         key,
            //         e1[key],
            //         e2[key],
            //         e2[key] - e1[key]
            //     ]))
            // );
            // this.x = this.x + (e2.offsetX - e1.offsetX);
            // this.y = this.y + (e2.offsetY - e1.offsetY);

            // // this.x = this.x + (e2.screenX - e1.screenX);
            // // this.y = this.y + (e2.screenY - e1.screenY);
            
        }
    }
}
</script>

<style>
.container {
    width: 300px;
    height: 300px;
    border: #000 1px solid;
    position: relative;
}

.drag-div {
    position: absolute;
    border: #666 1px dotted;
}
</style>