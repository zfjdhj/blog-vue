/*
 * @author  zfj
 * @date  2020/11/26 15:44
*/
import service from "@/util/request";

function getCommentList() {
    return service.request({
        url: "/api/get_comment" ,
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

export {getCommentList}