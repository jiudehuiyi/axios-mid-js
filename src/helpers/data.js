import { isPlainObject } from "./utill";

export function transformRequest( data ){
    if( isPlainObject(data) ) {
        JSON.stringify( data );
    }
    return data;
}
