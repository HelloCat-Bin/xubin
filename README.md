# 这是一个黑马VUE项目
## 这是牛逼的项目
# 远程修改了，看本地状态

#发表评论
1.把文本框做双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空，如果为空，则Toast提示用户，评论内容不能为空
4.通过vue-resource发表一个请求，把评论内容提交给服务器
5.当发表评论OK后，重新刷新列表，以查看最新的评论
 + 如果调用getComments方法创新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
 + 换一种思路，当评论成功后，在客服端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论，追加到data中comments的开头；这样就能完美实现评论刷新评论列表的需求；

 ### 制作顶部滑动条的坑们：
 1、需要借助与mui中的tab-top-webview-main.html
 2、需要把slider区域的mui-fullscreen类去掉
 3、滑动条无法正常出发滑动，通过检查官方文法，发现这是JS组件，需要被初始化
   +导入mui.js
   +调用官方提供的方式去初始化
   ''
   mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    ''
4、我们在初始化滑动条的时候，导入mui.js。但是，控制台报错，报了：bundle.js:40550 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
  +原因：MUI的tab-top-webview-main组件不支持严格模式
  +解决方案：把webpack打包时候的严格模式禁用掉
 
## 实现了点击图片跳转到图片详情页面
1. 在改造li 成router-link的时候，需要使用tag属性指定渲染为哪种元素，例如 tag= “li”,也解决了图片乱码现象——————————非常重要

#### 尝试在手机上去进行羡慕的预览和测试
1、 要保证自己的手机可以正常运行；
2、要保证手机和开发项目的电脑处于同一个wifi环境中，也就是说手机可以访问到电脑的IP
3、打开自己的项目中的package.json文件，在dev脚本中，添加一个 --host 指令，把当前电脑的WiFi地址，设置为 --host的指令值；
4、如何查看自己的所处wifi的IP，在cmd终端运行“ipconfig”,查看无线网的IP地址