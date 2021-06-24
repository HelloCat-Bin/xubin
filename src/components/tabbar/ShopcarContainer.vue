<template>
    <div class="shopper-car">
        <!-- 商品列表区域 -->
        <div class="goosd-list">
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<mt-switch v-model="value"></mt-switch>
                    <img src="https://img10.360buyimg.com/N6/s60x60_jfs/t1/183896/15/1619/62486/608b9659Ed45b81c3/98979381bb6b41ce.jpg" alt="">
                    <div class="info">
                        <h1>小米手机热卖</h1>
                        <p>
                            <span class="price">￥2199</span>
                            <a href="">删除</a>
                        </p>

                    </div>
					</div>
				</div>
			</div>
        </div>
<!-- 结算区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.shopper-car{
    background-color: #eee;
    overflow: hidden;
}

</style>