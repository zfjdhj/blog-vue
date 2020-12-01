/*
 * @author  zfj
 * @date  2020/12/1 16:04
*/

import {useRouter} from "vue-router";

//路由跳转
function routerLinkTo(url){
    console.log(url);
    let router=useRouter()
    return  router.push({path:url})
}

export {routerLinkTo}