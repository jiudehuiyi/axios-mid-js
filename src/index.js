
import xhr from "./xhr";
import { buildURL } from "./helpers/url";
function axios(config){

    processConfig(config);

    xhr(config);
}

function processConfig(config) {
    config.url = transformURL(config);
}

function transformURL(config){
    const { url,params } = config;
    return buildURL( url,params );
}
export default axios;