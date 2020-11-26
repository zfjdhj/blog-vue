/*
 * @author  zfj
 * @date  2020/11/26 14:41
*/
import service from "@/util/request";

function getBlogList() {
    return service.request({
        url: "/api/get_blog?page=admin" ,
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

export {getBlogList}