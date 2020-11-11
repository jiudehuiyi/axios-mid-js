//一个最基础的xhr

function xhr(config){

    const xhr = new XMLHttpRequest();

    const { method="get",url,data=null,...reset } = config;

    xhr.open( method.toUpperCase(),url,true );

    xhr.send(data);
}

