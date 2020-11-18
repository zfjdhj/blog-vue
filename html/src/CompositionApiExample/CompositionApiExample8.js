import {ref,customRef} from "vue"

/*customRef 实现网络请求*/
function apiGetType(value){
    return customRef((track,trigger) => {
        fetch(value)
            .then((res)=>{
                    return res.json();
                }
            )
            .then((data)=>{
                    console.log(data);
                    value=data
                    trigger();
                }
            )
            .catch((err)=>{
                console.log(err);
            })
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
function useCompositionApiExample8(url){
    let res_data=ref([])
    res_data=apiGetType(url)
    return {res_data}
}
export default useCompositionApiExample8;