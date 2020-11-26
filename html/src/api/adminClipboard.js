/*
 * @author  zfj
 * @date  2020/11/26 15:56
*/
import service from "@/util/request";

function getClipboardList() {
    return service.request({
        url: "/api/get_clipboard" ,
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

export {getClipboardList}