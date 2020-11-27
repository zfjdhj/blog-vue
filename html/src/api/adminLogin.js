/*
 * @author  zfj
 * @date  2020/11/27 15:45
*/
import service from "@/util/request";

function adminLogin(post_data) {
    return service.request({
        url: "/api/admin_login/" ,
        method:"post",
        data:{
            post_data
        }
    })
}

export {adminLogin}