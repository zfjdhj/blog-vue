import {reactive} from "vue"
function useCompositionApiExample3(state){
    let state2=reactive({
        item:{
            id:"",
            name:"",
            age:"",
        }
    })
    function addItem(e){
        e.preventDefault();
        console.log(state2.item);
        const newItem=Object.assign({},state2.item)
        state.items.push(newItem)
        state2.item.id="";
        state2.item.name="";
        state2.item.age="";
    }
    return {state2,addItem}
}
export default useCompositionApiExample3;