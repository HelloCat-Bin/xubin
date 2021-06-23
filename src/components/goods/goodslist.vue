<template>
  <div class="goods-list">
      <!-- 以router-link方式跳转，现在注释掉 -->
    <!-- <router-link class="goods-items" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
      <img :src="item.img_url" alt="" />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </router-link> -->

<!-- 在网页中，有两种页面跳转方式，1、使用a或者router-link标签进行页面跳转。2、使用window.location.herf的形式，叫做编程式导航 -->
    <div class="goods-items" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id" 
    @click="goDetail(item.id)">
      <img :src="item.img_url" alt="" />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>


    <!-- 加载更多 -->
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    //data是往组件内部挂载私有数据的
    return {
      goodslist: [], //存放商品列表的数组
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      //获取商品列表
      this.$http.get('/api/getgoodslist').then((result) => {
        if (result.body.code === '000') {
          //   this.goodslist = result.body.message
          this.goodslist = this.goodslist.concat(result.body.message)
        }
      })
    },
    getMore() {
        this.getGoodsList()
    },
    goDetail(id){
        // 使用JS的形式进行路由导航
        // 注意：一定要注意this.$route和this.$router的这两个对象
        // this.$route是路由参数对象，所有路由中的参数，params，query都属于他
        // this.$router是路由导航对象，用它可以方便的使用JS代码，实现路由的前进、后退，跳转到新的URL地址
        
        // 1.最简单的
        // this.$router.push('/home/goodsinfo/'+id)
        // 2.传递对象
        // this.$router.push({path:'/home/goodsinfo/'+id})
        // 3.传递自定义命名的路由
        this.$router.push({name:'goodsinfo',params:{id:id}})
    }
  },
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  padding: 6px;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-items {
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin-top: 2px;
    width: 49%;
    padding: 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;

      p {
        margin: 0;
        padding: 3px;
      }
      .price {
        .now {
          font-size: 20px;
          font-weight: bold;
          color: red;
        }
        .old {
          text-decoration: line-through;
          font-size: 6px;
          margin-left: 10px;
        }
      }
      .sell {
        justify-content: space-between;
        display: flex;
        font-size: 10px;
      }
    }
  }
}
</style>
