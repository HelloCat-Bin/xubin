<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr />
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponents/component.vue'

export default {
  data() {
    return {
      id: this.$route.params.id, //将url地址中传递过来的ID值，挂载到data中，方便后续调用
      newsinfo: {},
    }
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {

      this.$http.get('/api/getNewsInfo').then((response) => {
 
        if (response.body.code === '000') {
          this.newsinfo = response.body.message
        } else console.log('获取数据失败')
      })
    },
  },
  components:{     //用来注册子组件的节点
      'comment-box':comment
  },
}
</script>
<style lang="less" scoped>
.newsinfo-container {
  padding: 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 4px 0;
    color: chartreuse;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    color: blue;
    font-size: 13px;
  }
  .content {
  }
}
</style>
