<template>
  <div>
   <swiper :lunbotuList="lunbotulist"></swiper>

    <!-- 六宫格视图 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../../src/image/menu1.png" alt="" />
          <div class="mui-media-body">新闻资讯</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
  
          <img src="../../../src/image/menu2.png" alt="" />
          <div class="mui-media-body">图片分享</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">

          <img src="../../../src/image/menu3.png" alt="" />

          <div class="mui-media-body">商品购买</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">

          <img src="../../../src/image/menu4.png" alt="" />

          <div class="mui-media-body">留言反馈</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
  
          <img src="../../../src/image/menu5.png" alt="" />

          <div class="mui-media-body">视频专区</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
  
          <img src="../../../src/image/menu6.png" alt="" />

          <div class="mui-media-body">联系我们</div></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
const ERR_OK = '000'
import { Toast } from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'
const url =
  'https://www.hao123.com/feedData/data?type=rec&callback=jQuery110104189671248878972_1623423520129&pn=2&rn=10&ts=1623423534424&app_from=indexnew_feed&_=1623423520136'
export default {
  data() {
    return {
      lunbotulist: [], //保存轮播图的数据

    }
  },

  created() {
    this.$http.get('/api/getImage').then((response) => {
      response = response.data

      this.lunbotulist = response.datas
    })
  },
  methods: {
    getLunbotu() {
      this.$http.get(url).then((result) => {
        // console.log('result.body')

        console.log(result)

        // if(result.body.status === 0){
        //     this.lunbotulist = result.data;
        //      Toast('加载轮播图失败。。')
        // }else{
        //     Toast('加载轮播图失败。。')
        // }
      })
    },
  },
  components:{swiper}
}
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  img{
    border: 0;
    width: 60%;
}
.mui-media-body{
    font-size: 10px;
}
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}


</style>
