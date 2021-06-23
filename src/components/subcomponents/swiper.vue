<template>
    <div>
       <!-- 轮播图区域 -->
       <!-- 将来，谁使用此轮播图组件，谁为轮播图传递参数 -->
       <!-- 此时，lunbotuList应该是父组件向子组件传值 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["lunbotuList"]
}
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: white;
    }
    &:nth-child(3) {
      background: gray;
    }
  }
}
</style>