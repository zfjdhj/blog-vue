/*
 * @author  zfj
 * @date  2020/11/14 13:07
*/
import service from "@/util/request";

/*
* 常见相关api接口，方便调用
* */

// const host="http://django.test.cn"

/*
* GET请求获取blog列表
* */
function getBlogPage(num){
  return service.request(page(num))
}
function page(num){
    if(num >=0) {
        return {
            url: "/api/get_blog?page=" + num,
            method: "get",
            data: {
                data1: "data1",
                data2: "data2"
            }
        }
    }else{
        return {
            url:"/api/get_blog",
            method:"get",
            data:{
                data1: "data1",
                data2: "data2"
            }
        }
    }
}


/*
* GET请求获取Blog页面
* */
function getBlogById(num){
    return service.request({
        url: "/api/get_blog?id=" + num,
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

/*
* GET请求获取TypeTop列表
* */
function getTypeTop(num){
    return service.request({
        url:num>=0 ? "/api/get_type?top=" + num : "/api/get_type",
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

/*
* GET请求获取TagTop列表
* */
function getTagTop(num){
    return service.request({
        url:num>=0 ? "/api/get_tag?top=" + num : "/api/get_tag",
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

/*
* GET请求获取RecommendTop列表
* */
function getRecommendTop(num){
    return service.request({
        url:num>=0 ? "/api/get_recommend?top=" + num : "/api/get_recommend",
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

/*
* GET请求获取CommentTop列表
* */
function getCommentTop(num){
    return service.request({
        url:num>=0 ? "/api/get_comment?top=" + num : "/api/get_comment",
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}
/*
* GET请求获取ClipboardTop列表
* */
function getClipboardTop(num){
    return service.request({
        url:num>=0 ? "/api/get_clipboard?top=" + num : "/api/get_clipboard",
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}
/*
* GET请求获取Archive列表
* */
function getArchive(){
    return service.request({
        url:"/api/get_archive",
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
}

export { getBlogPage,getTypeTop,getTagTop,getRecommendTop,getCommentTop,getClipboardTop,getBlogById,getArchive };