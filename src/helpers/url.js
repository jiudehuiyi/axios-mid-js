//对url的params做处理，将传递的params加载url上


/*
    1.url需要进行处理，当传入的url不带params参数(url)的时候需要往url加入?,当带pramas参数的时候(url?xx=xxx)的时候需要往后面加入&
    2.当params对象中的value为数组的时候需要这样设置:key[]=value,例如 foo:["bar"] => foo[]=bar
    3.当params对象中的value为对象的时候需要这样设置:key=object,例如 key:{name:"xxx"} => key={name:"xxx"},但是值得注意的是value是需要转码的
    4.当params对象参数日期为对象的时候需要对value使用toISOString进行转换
    5.需要对空值(null,undefined)进行忽略
    6.特殊字符的支持 `@`、`:`、`$`、`,`、` `、`[`、`]`这些特殊字符是在url中希望保留原始值的，不希望被转码的，
    7.丢弃ur中的hash值,
    8.需要保留url中已经存在的参数键值对的
*/
import {
    isObject,isDate
} from './utill';

//转码
function encode(val){
    return encodeURIComponent(val)
            .replace(/%40/g, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',')
            .replace(/%20/g, '+')
            .replace(/%5B/gi, '[')
            .replace(/%5D/gi, ']')
}

export function buildURL( url,params ){

    if( !params ) {
        return url;
    }
    //储存结果
    let parts = [];

    params.forEach( (key)=>{
        let val = params[key];
        
        if( val === null || typeof val === "undefined" ) {
            return ;
        }

        let values = [];
        if( Array.isArray(val) ){
            key += "[]";
            values = val;
        }else{
            values = [val];
        }

        values.forEach( (item)=>{

            if( isDate(item) ){
                item = item.toISOString();
            }else if( isObject(item) ){
                item = JSON.stringify(item);
            }

            parts.push( `${encode(key)}=${encode(item)}`  );
        } );    
    } );

    const serializedParams = parts.join("&");

    const urlIndex = url.indexOf("#");

    if( urlIndex !== -1 ) {
        url.slice( 0,urlIndex );
    }

    url += (url.indexOf("?") ? "&" : "?") +serializedParams;

    return url;
}






