
//方法工具集合

const utill_toString = Object.prototype.toString;

//判断是否为日期
export function isDate(val){

    return utill_toString.call(val) === "[object Date]";
}
//判断是否为对象
export function isObject(val){

    //这种方法返回的是各种对象，例如array，date，Regexp等
    return Object !== null && typeof val === "object";
}

//判断是否为纯对象({})
export function isPlainObject(val){
    return utill_toString.call(val) === "[object Object]";
}



