<template lang="html">
    <div class="home">
        <div class="container">
            <div>

            </div>
            <div class="col-sm-6 col-md-3">
                <div class="thumbnail">
                    <img src="https://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg" alt="通用的占位符缩略图">
                    <div class="caption">
                        <h3>缩略图标签</h3>
                        <p>一些示例文本。一些示例文本。</p>
                        <p>
                            <a href="#" class="btn btn-primary" role="button">
		                        按钮
		                    </a>
                            <a href="#" class="btn btn-default" role="button">
		                        按钮
		                    </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div>
                
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="thumbnail">
                    <img src="https://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg" alt="通用的占位符缩略图">
                    <div class="caption">
                        <h3>缩略图标签</h3>
                        <p>一些示例文本。一些示例文本。</p>
                        <p>
                            <a href="#" class="btn btn-primary" role="button">
		                        按钮
		                    </a>
                            <a href="#" class="btn btn-default" role="button">
		                        按钮
		                    </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div>
                
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="thumbnail">
                    <img src="https://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg" alt="通用的占位符缩略图">
                    <div class="caption">
                        <h3>缩略图标签</h3>
                        <p>一些示例文本。一些示例文本。</p>
                        <p>
                            <a href="#" class="btn btn-primary" role="button">
		                        按钮
		                    </a>
                            <a href="#" class="btn btn-default" role="button">
		                        按钮
		                    </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <PolygonBox></PolygonBox> -->
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import PolygonBox from './PolygonBox'

export default {
    name: 'Home',
    components: {
        PolygonBox
    },
    data: function(){
        return {
            msg: "I am home pages"
        }
    }
}
</script>

<style lang="scss" type="text/css">
    @import '~@/assets/css/index';
</style>
