import {ref,reactive,toRaw,markRaw} from "vue"

/*roRaw 获取引用的原始数据*/
/*markRaw 永远不要追踪数据*/
function useCompositionApiExample5(){
    //ref:暴露简单对象
    //reactive:暴露复杂对象
    let obj={
        id:1,
        name:"zfj",
        age:18,
    }
    let msg="zfj"
    let data5_1=ref(msg)
    obj=markRaw(obj)
    let data5_2=reactive(obj)
    console.log(data5_1);
    console.log(data5_2);
    let data5_3=toRaw(data5_1.value)
    let data5_4=toRaw(data5_2)
    console.log(data5_3);
    console.log(data5_4);
    function changeName(){
        data5_2.name="zs"
    }

    return {data5_1,data5_2,changeName}
}
export default useCompositionApiExample5;