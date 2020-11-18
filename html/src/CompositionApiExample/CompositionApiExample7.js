import {customRef} from "vue"

/*customRef 自定义ref*/
function myRef(value){
    return customRef((track,trigger) => {
        return{
            get(){
                track();//告诉vue去追踪数据
                console.log("get", value);
                return value
            },
            set(newValue){
                console.log("set", newValue);
                value=newValue
                trigger();//更新界面
            }
        }
    })
}
function useCompositionApiExample7(){
    let count7=myRef(18)
    function add7(){
        count7.value +=1
    }
    console.log(count7);
    return {count7,add7}
}
export default {useCompositionApiExample7,myRef};