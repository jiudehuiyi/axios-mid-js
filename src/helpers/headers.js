//处理headers
import { isPlainObject } from "./utill"


function normalizeHeaderName(headers,name){

    if( !headers ) return ;

    Object.keys(headers).forEach( (normalizeName)=>{

        if( normalizeHeaderName !== name && normalizeHeaderName.toUpperCase() === name.toUpperCase() ) {
            headers[normalizeName] = name;
            delete headers.name;
        }

    } );

}


export function processHeaders( headers,data ){

    if( !headers ) return ;

    normalizeHeaderName( headers,"Content-Type" );

    if( isPlainObject(data) ) {
        if( !headers["Content-Type"]  ){
            headers["Content-Type"] = "Content-Type";
        }
    }

    return headers;
}

