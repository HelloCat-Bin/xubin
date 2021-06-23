<template>
  <div class="goodsinfo-container">

<!-- 商品购买小球 -->
<transition
@before-enter='beforeEnter'
@enter="enter"
@after-enter="afterEnter">
    <div class="ball" v-show="ballFlag"></div>
</transition>
    <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;&nbsp;&nbsp;销售价：<span
              class="now_price"
              >￥{{goodsinfo.sell_price}}
            </span>
          </p>
          <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
          <p>
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="addToShopcar">加入购物车</mt-button>
            <!-- 分析：如何实现加入购物车的时候，拿到选择的数量 -->
            <!-- 经过分析，按钮属于goods info页面，数字属于numberbox组件，由于设计到父子组件的嵌套，所以无法直接在goodsinfo页面中获取选中的商品数量值 -->
            <!-- 涉及到子组件向父组件传值了 （事件调用机制）-->
            <!-- 事件调用的本质：父向子传递方法，子调用这个方法，同时把数据当作参数传递给这个方法 -->
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
          <p>上架事件：{{goodsinfo.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '../../subcomponents/swiper.vue'
//导入数字选择框组件
import numbox from '../../subcomponents/goodsinfo_nunberbox.vue'
export default {
  data() {
    return {
      id: this.$route.id, //将路由参数对象中的id挂载到data中，方便后续调用
      lunbotu: [],
      goodsinfo:{},
      ballFlag:false,   //控制小球的隐藏和显示
      selectedCount:1,  //
    }
  },
  created() {
    this.getLunBoTu(),
    this.getGoodsInfo()
  },

  methods: {
    getLunBoTu() {
      this.$http.get('/api/getgoodslist').then((result) => {
        if (result.body.code === '000') {
          //先循环轮播图数组的每一项，为item添加img属性，因为轮播图只认识item.img，不认识item.img_url
          result.body.message.forEach((item) => {
            item.img = item.img_url
          })
          this.lunbotu = result.body.message
        }
      })
    },
    getGoodsInfo(){
        // 获取商品的信息
        this.$http.get('/api/getgoodsinfo').then(result =>{

            if(result.body.code === '000'){
                this.goodsinfo = result.body.message
            }
        })
    },
    goDesc(id){
        // 点击使用编程式导航 ，跳转到图片介绍页面
        this.$router.push({name:'goodsdesc', params:{id}});
    },
    goComment(id){
        this.$router.push({name:'goodscomment', params:{id}});

    },
    addToShopcar(){
        this.ballFlag = !this.ballFlag;
    },
    beforeEnter(el){
        el.style.transform = "translate(0,0)" 
    },
    enter(el,done){
        el.offsetWidth;
        el.style.transform = "translate(93px,230px)" ;
        el.style.transition = "all 1s cubic-bezier(.83,.12,.94,.76)";
        done()

    },
    afterEnter(el){
        this.ballFlag = !this.ballFlag
    },
    getSelectedCount(count){
        // 当子组件把选中的数量传递给父组件的时候，把选中的值保存到data
        this.selectedCount = count
        // console.log('父组件拿到的数量值为'+ count )
       
    }

  },
  components: { swiper, numbox },
}
</script>

<style lang="less" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    font-size: 16px;
    color: red;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }

  .ball{
     width: 15px;
     height: 15px;
     border-radius: 50%;
     background-color: red;
     position: absolute;
     z-index: 99;
     top:389px;
     left: 149px;
  }

}
</style>
