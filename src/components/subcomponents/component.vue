<template>
    <div class="cmt-container">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多吐槽120字）"></textarea>
        <mt-button type="primary"  size="large"  >发表评论</mt-button>
       <div class="cmt-list">
           <div class="cmt-item" v-for="(item,i) in comments" :key='item.add_time'>
               <div class="cmt-title" >
                   第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time}}
               </div>
               <div class="cmt-body">
                   {{item.content}}
               </div>
           </div>
       </div>


        <mt-button type="danger"  size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            
            pageIndex:1,  //默认展示第一页
            comments:[],
        }
    },
    created(){

        this.getComments()
    },
    methods:{
        getComments(){   //获取评论
           
            this.$http.get('/api/getComments' ).then(result =>{
                if (result.body.code === "000"){
                     this.comments = result.body.message
                }else
                console.log('获取数据失败')
            })
        },
        getMore(){     //获取加载页

        }
    },
    props:['id']
}
</script>

<style lang="less" scoped>
.cmt-container{
  h4{
      font-size: 20px;
  }
  textarea{
      font-size: 16px;
      margin: 0;
      height: 85px;
  }
  .cmt-list{
      margin: 5px 0;
      .cmt-item{
          font-size: 13px;
          .cmt-title{
              background-color: #ccc;
              line-height: 35px;
              
          }
          .cmt-body{
              line-height: 35px;
              text-indent: 2em;

          }
      }
  }

}
</style>