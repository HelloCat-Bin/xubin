<template>
  <div class="photoinfo-container">
    <h3>
      {{photoinfo.title}}
    </h3>
    <p class="subtitle" >
      <span>发表事件：{{photoinfo.add_time}}</span>
      <span>点击：{{photoinfo.click}} 次</span>
    </p>

    <hr />

    <!-- s缩略图区域 -->
     <div class="thumbs">
          //list为你数据储存的地方，handleClose关闭缩略图执行的方法
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
      </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个评论区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from '../subcomponents/component.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,    
      photoinfo:[],
      list:[]//缩略图数据
    }
  },
  created() {
      this.getPhotoInfo();
      this.getlist()
  },
  methods: {
    getPhotoInfo() {
      this.$http.get('/api/getImgInfo').then((result) => {

        if (result.body.code === '000') {
          this.photoinfo = result.body.message
        } else console.log('获取数据失败')
      })
    },
    getlist(){
        this.$http.get('/api/getthumimages').then(result=>{
            debugger
            if(result.body.code==='000'){
                //循环数组的每一项给它加下面的属性
                result.body.message.forEach(item => {
                    item.msrc = item.src;//外面的小图
                    item.w=600//设置以大图浏览时的宽度
                    item.h=400//设置以大图浏览时的高度
                });
                this.list=result.body.message
            }
        })
    }
  },
   components:{     //用来注册子组件的节点
      'comment-box':comment
  },
}
</script>


<style lang="less" scoped>

.photoinfo-container{
    padding:3px;
    h3{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 8px 0;
    }
}

.subtitle{font-size: 12px;
      color: ff22ss;
     display: flex;
      justify-content: space-between;
      margin: 10px 0 -6px 0;
}
.content{
    font-size: 13px;
    line-height: 30px;
}


</style>
