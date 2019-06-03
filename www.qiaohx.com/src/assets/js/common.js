// 第一种导出方式 （同第三种）
function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
function accountType(val) {
    if (/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(val)) {
        return '01';
    }
    else if((/^1[34578]\d{9}$/.test(val))) {
        return '02';
    }
    else if (/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(val)) {
        return '03';
    }
    else {
        return '00';
    }
}
function popup(e) {
    var num = 0;
    var that = e;
    var timer = setInterval(function() {
        num++
        if(num >= 2) {
            that.popFlag = false;
            clearInterval(timer)
        }
    }, 1000)
}
export default {isEmpty, accountType, popup}

// 第二种导出方式（直接导出函数）

// export function isEmpty(obj){
//     if(typeof obj == "undefined" || obj == null || obj == ""){
//         return true;
//     }else{
//         return false;
//     }
// }
//
// export function test() {}


// 第三种导出方式（同第一种）
// 默认导出的是个对象{}
// export default {
//     // es6语法 对象中的函数
//     isEmpty(obj) {
//         if(typeof obj == "undefined" || obj == null || obj == ""){
//             return true;
//         }else{
//             return false;
//         }
//     },
//     test() {}
// }
