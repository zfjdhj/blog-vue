import {reactive} from "vue"

function useCompositionApiExample4(){
    //ref:暴露简单对象
    //reactive:暴露复杂对象
    let state4=reactive({
        time:new Date()
    });
    function addDay(){
        const newTime=new Date(state4.time.getTime())
        newTime.setDate(state4.time.getDate() +1)
        state4.time=newTime
        console.log(state4.time);
    }
    return {state4,addDay}
}
export default useCompositionApiExample4;