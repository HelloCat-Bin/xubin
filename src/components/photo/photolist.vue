<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider ">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            v-for="item in cates"
            :key="item.id"
            @click="getImgListByCateId(item.id)"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <!-- 为 img 元素添加 v-lazy 指令，指令的值为图片的地址。同时需要设置图片在加载时的样式。 -->
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h5 class="info-title">{{ item.title }}</h5>
          <div class="info-body">
            {{ item.miaoshu }}
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//导入mui的文件
import mui from '../../lib/mui/js/mui.min.js'

export default {
  data() {
    return {
      cates: [],
      list: [],
    }
  },
  created() {
    this.getImageCates()
    this.getImgListByCateId(0)
  },
  mounted() {
    //当组件中的DOM结构被渲染好并放到页面中后，会执行这个狗子函数，如果要操作元素，最好是在mounted里面，因为这里面的DOM元素是最新的
    //初始化mui组件的
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
  methods: {
    getImageCates() {
      this.$http.get('/api/getimagecategory').then((result) => {
        if (result.body.code === '000') {
          this.cates = result.body.message
        } else console.log('获取数据失败')
      })
    },
    getImgListByCateId() {
      this.$http.get('/api/getimagecategory').then((result) => {
        if (result.body.code === '000') {
          this.list = result.body.message
        } else console.log('获取数据失败')
      })
    },
  },
}
</script>

<style lang="less" scoped>
.photo-list {
  list-style: none;
  margin: 0;
  padding: 3px;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 5px;
    box-shadow: 0 0 6px #999;
    position: relative;
  }
  img {
    width: 100%;
    vertical-align: middle;
  }
  img[lazy='loading'] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .info {
    color: white;
    text-align: left;
    position: absolute;
    bottom: 0;

    .info-title {
      font-size: 14px;
      color: white;
    }
    .info-body {
      font-size: 13px;
    }
  }
}
</style>
