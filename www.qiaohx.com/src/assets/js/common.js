// 第一种导出方式 （同第三种）
// function isEmpty(obj){
//     if(typeof obj == "undefined" || obj == null || obj == ""){
//         return true;
//     }else{
//         return false;
//     }
// }
// function test() {}
// export default {isEmpty, test}

// 第二种导出方式（直接导出函数）

export function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

export function test() {}


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
