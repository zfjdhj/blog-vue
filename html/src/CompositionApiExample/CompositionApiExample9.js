import {ref,onMounted} from "vue"

/*ref 获取界面元素*/

function useCompositionApiExample9(){
    let box=ref(null)
    console.log(box);
    onMounted(()=>{
        console.log("onMounted",box.value);
    })
    return {box}
}
export default useCompositionApiExample9;