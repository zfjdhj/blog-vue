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

function getBlogById(id) {
    return service.request({
        url: "/api/get_blog?id="+id+"&mode=markdown" ,
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

function addBlog(data) {
    return service.request({
        url: "http://127.0.0.1:82/api/add_blog/" ,
        method:"post",
        headers: {
            "Content-type":"application/json"
        },
        data: data
    })
}


export {getBlogList,getBlogById,addBlog}