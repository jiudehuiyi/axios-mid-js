
import xhr from "./xhr";
import { buildURL } from "./helpers/url";
import { transformRequest } from "./helpers/data";
function axios(config){

    processConfig(config);

    xhr(config);
}

function processConfig(config) {
    config.url = transformURL(config);
    config.data = transformData( config );
}

function transformURL(config){
    const { url,params } = config;
    return buildURL( url,params );
}
function transformData(config) {
    const { data } = config;
    if( data ) {
        transformRequest(data);
    }
    return ""
}
export default axios;