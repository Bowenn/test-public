 <template>
    <div class="container">
        <canvas id="canvas" width="1280" height="720"></canvas>
    </div>
</template>

<script>
import {testWebGL} from './test'
export default {
    data() {
        return {
            gl: null,
            programInfo: null,
        };
    },
    methods: {
        /*
        testWebGL1() {
            // Get A WebGL context
            let canvas = document.getElementById("canvas");
            let gl = canvas.getContext("experimental-webgl");
            
            // setup a GLSL program
            let program = createProgramFromScripts(gl, ["2d-vertex-shader", "2d-fragment-shader"]);
            gl.useProgram(program);
            
            // look up where the vertex data needs to go.
            let positionLocation = gl.getAttribLocation(program, "a_position");
            
            // Create a buffer and put a single clipspace rectangle in
            // it (2 triangles)
            let buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(  
                gl.ARRAY_BUFFER,
                new Float32Array([
                    -1.0, -1.0,
                    1.0, -1.0,
                    -1.0,  1.0,
                    -1.0,  1.0,
                    1.0, -1.0,
                    1.0,  1.0]),
                gl.STATIC_DRAW);
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
            
            // draw
            gl.drawArrays(gl.TRIANGLES, 0, 6);
        },
        */
        
    },
    mounted() {
        const canvas = document.querySelector("#canvas");
        // 初始化WebGL上下文
        const gl = canvas.getContext("webgl");
        testWebGL(gl);
    }
};
</script>

<style lang="stylus" scoped>
.container
    width 100vw
    height 100vh
</style>