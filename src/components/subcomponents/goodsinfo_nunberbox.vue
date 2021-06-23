<template>
<!-- 使用watch属性监听，监听父组件传递过来的max值，不管watch会被触发几次， -->
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1"
    @change="countChange" ref="numbox"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  data() {
    return {}
  },
  mounted() {
    mui('.mui-numbox').numbox();
    
  },
  methods:{
      countChange(){
          //每当文本框的数据被修改，立即把最新的数据，通过事件调用，传递给父组件
         
          this.$emit("getcount",parseInt(this.$refs.numbox.value))
         
      }
  },
  props:["max"],
  watch:{
      max:function(newVal,oldVal){
          mui(".mui-numbox").numbox().setOption('max',newVal)
      }
  },
}
</script>

<style lang="less" scoped></style>
