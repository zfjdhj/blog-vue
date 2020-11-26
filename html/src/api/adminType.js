/*
 * @author  zfj
 * @date  2020/11/26 15:04
*/
import service from "@/util/request";

function getTypeList() {
    return service.request({
        url: "/api/get_type" ,
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

export {getTypeList}