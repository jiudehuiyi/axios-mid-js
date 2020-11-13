//一个最基础的xhr

function xhr(config){

    const xhr = new XMLHttpRequest();

    const { method="get",url,data=null,headers,...reset } = config;

    xhr.open( method.toUpperCase(),url,true );

//处理header逻辑
Object.keys(headers).forEach( (name)=>{

    if( data === null && name.toUpperCase() === "CONTENT-TYPE" ){
        delete headers[name];
    }else {
        xhr.setRequestHeader( name,headers[name] );
    }

} );

    xhr.send(data);
}

