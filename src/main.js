//入口文件
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)
    //djdhuih
    // 导入mock
import Mock from './mock/mock';

//导入Vuex，配置步骤
// 1.运行npm install vuex --save
// 2.导入包
import Vuex from 'vuex'
// 3.注册Vuex到vue中
Vue.use(Vuex)

//每次进入网站，肯定要调用 main.js在刚调用的时候，先从本地存储中，把购物车的数据读出来
var car = JSON.parse(localStorage.getItem('car') || '[]')
    // 4.new Vuex.Store()实例，得到一个数据仓库对象
const store = new Vuex.Store({
    state: { //this.$store.state.***
        car: car,
        //将购物车的商品的数据，用一个数组存储起来，在car数组中，存储一些商品的对象，可以暂时将这个商品设计这样子
        // {id:商品的id，count：要购买的数量，price：商品的单价，selected:true}
    },
    mutations: { //store.$store.commit("方法的名称"，'按需传递唯一的参数')
        addToCar(state, goodsinfo) {
            // 点击加入购物车，把商品信息保存到store中的car上面
            var flag = false
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            };

            // 当更新car之后，把car数组存储到本地的local storage中
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: { //this.$store.getters.***
        // getters相当于计算属性，也相当于filters
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        }
    }
});

// 安装mock
Mock.mockData();


// 2.1导入 vue-resource
import VueResource from 'vue-resource'
// 2.2安装vue-resource
Vue.use(VueResource)


// 导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 按需导入mint-ui中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

// 全部导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 导入自己的router.js路由模块
import router from './router.js'


// 导入App根组件
import app from './App.vue'

// 导入图片预览Vue-preview插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router, //1.4挂载路由对象到VM实例上
    store, //5.将Vuex创建的 store 挂载到vue上面。Vuex 提供了一个从根组件向所有子组件，以 store 选项的方式“注入”该 store 的机制：
})