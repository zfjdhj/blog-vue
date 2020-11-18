import {ref} from "vue"

function useCompositionApiExample1(){
    //ref:暴露简单对象
    //reactive:暴露复杂对象
    let count=ref(0);
    function add(){
        count.value +=1;
    }
    return {count,add}
}
export default useCompositionApiExample1;