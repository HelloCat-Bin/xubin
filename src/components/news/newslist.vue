<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newlist" 
      :key="item.id">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          />
          <div class="mui-media-body">
            <h1>{{ item.title}}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </a>
      </li>
    
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newlist: [
    
      ], //新闻列表
    }
  },
  created() {
    this.getNewList()
  },
  methods: {
    getNewList() {

      this.$http.get('/api/getNewList').then((result) => {

    
        if (result.body.code === "000") {
          //如果没有失败，应该把数据保存到data上
          this.newlist = result.body.datas
        } else {
          console.log('获取新闻列表失败')
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: ff22ss;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
