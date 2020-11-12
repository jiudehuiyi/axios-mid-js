
//方法工具集合

const utill_toString = Object.prototype.toString;

//判断是否为日期
export function isDate(val){

    return utill_toString.call(val) === "[object Date]";
}
//判断是否为对象
export function isObject(val){

    return utill_toString.call(val) === "[object Object]";
    //或者
    return Object !== null && typeof val === "object";
}





