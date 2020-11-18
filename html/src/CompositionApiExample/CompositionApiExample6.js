import {toRef,toRefs} from "vue"

/*toRef 引用数据*/
function useCompositionApiExample6(){
    //ref:暴露简单对象
    //reactive:暴露复杂对象
    let obj={
        id:1,
        name:"zfj",
        age:18,
    }
    let data6_1=toRef(obj,"name")
    let data6_2=toRefs(obj)
    console.log(obj);
    console.log(data6_1);
    console.log(data6_2);
    function changeName6(){
        console.log(obj);
        data6_1.value="zs"
        console.log(obj);
        data6_2.name.value="ls"
        console.log(obj);
    }

    return {data6_1,data6_2,changeName6}
}
export default useCompositionApiExample6;