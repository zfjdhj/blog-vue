<template>
  <div id="test" v-cloak>
    <!--数据单向传递 M->V-->
    <p v-once>原始数据：{{ name }}</p>
    <p>当前数据：{{ name }}</p>
    <label>
      <!--数据双向传递 V->M-->
      <input type="text" v-model="msg">
    </label>
    <!--插值方式：指定位置；不解析html-->
    <p>当前数据：{{ name }}</p>
    <p>html标签：{{ span }}</p>
    <!--v-text方式：会覆盖原有内容；不解析html-->
    <p v-text="name"></p>
    <p v-text="span"></p>
    <!--v-html方式：会覆盖原有内容；会解析html-->
    <p v-html="name"></p>
    <p v-html="span"></p>
    <!--v-if指令：元素重新创建/删除-->
    <p v-if="show">我是True</p>
    <p v-else-if="hidden">我是False</p>
    <!--if和else中间不能插入其他内容-->
    <!--    <p>中间</p>-->
    <p v-else>hidden提示</p>
    <!--v-show指令：元素样式改变-->
    <p v-show="show">我是show</p>
    <p v-show="hidden">我是hidden</p>
    <!--v-for指令：遍历-->
    <ul>
      <li v-for="(value, index) in list" :key='index'>{{index}}-----{{value}}</li>
    </ul>
    <!--v-bind指令：绑定元素属性-->
    <label>
      <input type="text" v-bind:value="name">
    </label>
    <br>
    <label>
      <input type="text" :value="name">
    </label>
    <!--v-bind指令：绑定元素class属性-->
    <p class="size color active">绑定class</p>
    <p :class="['size', {'color':false},hidden ? 'active':'']">绑定class</p>
    <p :class="obj_class">绑定class</p>
    <!--v-bind指令：绑定元素style属性-->
    <p style="color:red">绑定style</p>
    <p :style="{color:'red','font-size':'90px'}">绑定style</p>
    <p :style="obj_style1">绑定style</p>
    <p :style="[obj_style1,obj_style2]">绑定style</p>
    <!--v-on指令：绑定元素监听事件-->
    <button onclick="alert('test v-on')">v-on</button>
    <!--v-on指令：绑定元素监听事件必须赋值回调函数名称;传参可以传事件对象原身-->
    <button v-on:click="test_f1">v-on</button>
    <button @click="test_f5($event)">v-on</button>
    <!--v-on指令：修饰符.once 只执行一次-->
    <button @click.once="test_f1">v-on.once</button>
    <!--v-on指令：修饰符.prevent 阻止元素默认事件-->
    <a href="test.vue" @click="test_f1">v-on.prevent</a>
    <a href="test.vue" @click.prevent="test_f1">v-on.prevent</a>
    <!--v-on指令：修饰符.stop 阻止嵌套元素事件冒泡-->
    <div class="a"  @click="test_f2">
      <div class="b"  @click="test_f3">
        <div class="c"  @click="test_f4">
        </div>
      </div>
    </div>
    <div class="a"  @click="test_f2">
      <div class="b"  @click.stop="test_f3">
        <div class="c"  @click.stop="test_f4">
        </div>
      </div>
    </div>
    <!--v-on指令：修饰符.self 只执行当前元素的绑定事件-->
    <div class="a"  @click="test_f2">
      <div class="b"  @click.self="test_f3">
        <div class="c"  @click="test_f4">
        </div>
      </div>
    </div>
    <!--v-on指令：修饰符.capture 捕获绑定事件-->
    <div class="a"  @click.capture="test_f2">
      <div class="b"  @click.capture="test_f3">
        <div class="c"  @click.capture="test_f4">
        </div>
      </div>
    </div>
    <!--v-on指令：按键修饰符.enter 捕获按键事件-->
    <label>
      <input type="text" @keyup.enter="test_f2">
    </label>
    <!--    &lt;!&ndash;keyCode 112：F1&ndash;&gt;-->
<!--    <input type="text" @keyup.f2="test_f2">-->
    <p >自定义指令</p>
    <!--v- 自定义指令：局部定义调用放下面就好-->
    <p v-color>自定义指令局部定义</p>
    <label>
<!--      <input v-focus type="text">-->
    </label>
    <!--v- 自定义指令：全局定义调用main.js-->
    <p v-color2>自定义指令全局定义</p>
    <p v-color3="'green'">自定义指令传参</p>
    <!--计算属性：依赖缓存-->
    <p>{{msg_computed}}</p>
    <!--函数：每次都要执行-->
    <p>{{msg_fun()}}</p>
    <!--文本格式化-->
    <p>{{ $filters.dateFormat(time)}}</p>
    <!--过渡动画:transition只能有一个子元素-->

    <transition name="two">
      <div class="box" v-show="isShow" >3</div>
    </transition>
    <button @click="toggle">过渡动画</button>
    <!--可以通过 appear attribute 设置节点在初始渲染的过渡-->
    <!--name:指定动画-->
    <transition appear name="one">
      <div class="box" v-show="isShow" >1</div>
    </transition>
    <!--    <transition v-bind:css="false"-->
    <!--                appear-->
    <!--                @before-enter="beforeEnter"-->
    <!--                @enter="enter"-->
    <!--                @after-enter="afterEnter"-->
    <!--                @before-leave="beforeLeave"-->
    <!--                @leave="leave"-->
    <!--                @after-leave="afterLeave">-->

    <!--      <div class="box" v-show="isShow" >2</div>-->
    <!--    </transition>-->
    <!--自定义过渡动画类名-->
    <transition appear name="one"
                enter-from-class=""
                enter-active-class=""
                enter-to-class=""
                leave-from-class="two-leave-from"
                leave-active-class="two-leave-active"
                leave-to-class="two-leave-to"
    >
      <div class="box" v-show="isShow" >3</div>
    </transition>
    <!--列表动画-->
    <form action="">
      <input type="text" v-model="name">
      <input type="submit" value="添加"  @click.prevent="add">
    </form>
    <ul>
      <transition-group appear name="one" >
        <li v-for="(value, index) in list2" :key='value.id' @click="del(index)">
          <input type="checkbox">
          {{index}}-----{{value.name}}
        </li>
      </transition-group>
    </ul>
    <!--组件注册-->
<!--    <my-component></my-component>-->
    <div id="t123">
      <button-counter></button-counter>
    </div>
  </div>
</template>

<script>
import "../plugins/test"

export default {
  name: "test",
  //定义计算属性
  computed:{
    msg_computed(){
      return "abcdef".split("").reverse().join("")
    }
  },
  //自定义局部指令
  directives: {
    focus: {
      // 指令的定义
      /*beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用。在这里你可以做一次性的初始化设置。
        mounted：在挂载绑定元素的父组件时调用。
        beforeUpdate：在更新包含组件的 VNode 之前调用。
        updated：在包含组件的 VNode 及其子组件的 VNode 更新后调用。
        beforeUnmount：在卸载绑定元素的父组件之前调用
        unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次。*/
      mounted(el) {
        el.focus()
      }
    },
    color: {
      mounted(el) {
        el.style.color="red"
      }
    }
  },
  data() {
      return {
        name: "纸飞机的痕迹",
        msg: "这是一条测试msg",
        time:Date.now(),
        span:"<span>123</span>",
        isShow:true,
        show:true,
        hidden:false,
        list:["item1","item2","item3"],
        list2:[
            {name:"item1",id:1},
            {name:"item2",id:2},
            {name:"item3",id:3}
        ],
        id:3,
        obj_class:{
          size:false,
          color:true,
          active:true
        },
        obj_style1:{
          color:'blue',
          'font-size':'90px'
        },
        obj_style2:{
          'background-color':'red'
        }
      }
    },
  methods:{
      del(index){
        this.list2.splice(index,1)
      },
      add(){
        this.id++;
        // let lastName=this.list2[this.list2.length-1]
        let newName={name:this.name,id:this.id}
        // this.list.push(newName)
        this.list2.unshift(newName)
        this.name=""
      },
      beforeEnter(el){
        el.style.opacity = "0";
      },
      enter(el,done){
        el.offsetWidth;
        el.style.transition="all 3s"
        el.style.opacity = "1";
        console.log("enter start");
        setTimeout(function (){
          done();
        },0)
        console.log("enter end")
      },
      afterEnter(el){
        el.style.opacity = "1";
        // el.style.marginLeft = "500px";
      },
      beforeLeave(el){
        el.offsetWidth;
        // el.style.opacity = 0;
        // el.style.marginLeft = "750px";
        el.style.display="block"
        console.log("start");
      },
      leave(el,done){
        el.offsetWidth;
        el.style.transition="all 3s"

        setTimeout(function (){
          done();
        },0)

      },
      afterLeave(el){
        el.offsetWidth;
        console.log("end");
        el.style.marginLeft = "0px";
        el.style.opacity = 0;

      },
      toggle(){
        this.isShow=!this.isShow
      },
      msg_fun(){
        return "abcdef".split("").reverse().join("")
      },
      test_f1(){
        alert('test v-on')
      },
      test_f2(){
        console.log("red");
        /*要使用data中的数据 this.name*/
        console.log(this.name);
      },
      test_f3(){
        console.log("blue");
      },
      test_f4(){
        console.log("green");
      },
      test_f5(e){
        console.log(e);
      },
    },
  // components: {
  //   'my-component': MyComponent,
  //   // 'component-b': ComponentB
  // }
}
</script>

<style scoped>
[v-cloak] { display: none }
p{
  margin: 3px;
  padding: 2px;
}

.size{
  font-size: 100px;
}

.color{
  color: red;
}

.active{
  background: skyblue;
}

.a{
  height: 300px;
  width: 300px;
  background: red;
}

.b{
  height: 200px;
  width: 200px;
  background:blue;
}

.c{
  width: 100px;
  height: 100px;
  background: green;
}

.box{
  width: 200px;
  height: 200px;
  background: red;
}

.one-enter-from{
  opacity: 0;
}
.one-enter-to{
  opacity: 1;
  margin-left: 500px;
}
.one-enter-active{
  transition: all 3s;
}
.one-leave-from{
  opacity: 1;
}
.one-leave-to{
  opacity: 0;
}
.one-leave-active{
  transition: all 3s;
}
.two-enter-from{
  opacity: 0;
}
.two-enter-to{
  opacity: 1;
  /*margin-top: 500px;*/
}
.two-enter-active{
  transition: all 3s;
}
.two-leave-from{
  opacity: 1;
}
.two-leave-to{
  opacity: 0;
}
.two-leave-active{
  transition: all 3s;
}


</style>