import {reactive} from "vue"
function useCompositionApiExample2(){
    //ref:暴露简单对象
    //reactive:暴露复杂对象
    let state=reactive({
        items:[
            {id:1,name:"zfj",age:18},
            {id:2,name:"zfj2",age:28},
            {id:3,name:"zfj3",age:38}
        ]
    })
    function remItem(index){
        state.items=state.items.filter((item,id) => id !== index)
    }
    return {state,remItem}
}
export default useCompositionApiExample2;