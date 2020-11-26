/*
 * @author  zfj
 * @date  2020/11/26 15:35
*/
import service from "@/util/request";

function getTagList() {
    return service.request({
        url: "/api/get_tag" ,
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

export {getTagList}