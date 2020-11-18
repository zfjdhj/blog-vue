import {ref} from "vue"
import axios from "axios"

/*测试axios*/

function useCompositionApiExample10(){
    let res=ref(null)
    axios.get("/user?id=1")
        .then(function (response){
            res.value=response
            console.log(response);
            })
        .catch(function (error){
            console.log(error);
        })
    axios.post("/user?id=2",{
                data1: "data1",
                data2: "data2"
            })
        .then(function (response){
            res.value=response
            console.log(response);
            })
        .catch(function (error){
            console.log(error);
        })
    axios.request({
        url:"/user?id=3",
        method:"get",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
        .then(function (response){
            res.value=response
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        })
    axios.request({
        url:"/user?id=4",
        method:"post",
        data:{
            data1: "data1",
            data2: "data2"
        }
    })
        .then(function (response){
            res.value=response
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        })
    return {res}
}
export default useCompositionApiExample10;