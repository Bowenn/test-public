
// /**
//  * @author Bowen (bowenandbugs@gmail.com)
//  * @param {Number} m 物体质量（kg）
//  * @param {Number|Array} v0 初始速度（m/s, 默认为0），传入Array数对[v_x, v_y]分别对应x/y轴方向速度，传入number时为x轴
//  * @param {Number} step 时间间隔（ms）
//  * @param {Number|Array} a 恒定加速度（m/s^2, 默认为g: 9.8m/s^2），传入Array数对[a_x, a_y]分别对应x/y轴方向速度，传入number时为x轴
//  * @param {Number|Array} d (未支持) 阻力计算参数D（kg/m, N·s^2·m^-2），传入Array数对[a_x, a_y]分别对应x/y轴方向速度，传入number时为x轴
//  * @param {Number} step 取样时间间隔（ms）
//  */

// class Point {
//     pos: Array<Number>;
//     v: Array<Number>;
//     a: Array<Number>;
//     t: Number;
//     constructor(pos, v, a, t) {
//         this.pos = pos
//         this.v = v
//         this.a = 
//     }
// }

// class Motion {
//     m: Number;
//     v: Number;
//     a: Number;
//     point0: Point;
//     d: Number;
//     private step: Number;
//     private dimension: Number;
//     private trailTemp: Array<Point> | null;
//     constructor({pos = [0], v = [0], a = [0], m = 1, d = 0} = {}, config: Object = {}) {
//         this.point0 = new Point()
//     }
//     // 重设step
//     setStep(step) {
//         this.step = step
//         this.trailTemp = []
//     }
//     /**
//      * 无阻力的理想运动轨迹
//      * @param {Number} t 截止时间（s）
//      * @returns {Array} 运动轨迹信息，[[x, y, v_x, v_y], ...]
//      */
//     getTrail(t) {
//         let out = []
//         let end = Math.floor(t * 1000 / step)
//         let i = Math.min(this.trailTemp.length, end)
//         for (let i = this.trailTemp.length; i < end; i++) {
            
//         }
//     }
// }
// /**
//  * @author Bowen (bowenandbugs@gmail.com)
//  * @param {Number} t 时长（s）
//  * @returns {Array} 时间从0到t，物体坐标的数组
//  */
// export function parabolicMotion(m, v0 = 0, step = 100, t = 1, a = 9.8, d = 0) {

// }