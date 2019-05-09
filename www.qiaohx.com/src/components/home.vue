<template lang="html">
    <div class="home">
        <div class="container">
            <div class="col-sm-6 col-md-3">
                <div class="thumbnail">
                    <img src="https://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg" alt="通用的占位符缩略图">
                    <div class="caption">
                        <h3>缩略图标签</h3>
                        <p>一些示例文本。一些示例文本。</p>
                    </div>
                </div>
                <div class="thumbnail">
                    <!-- <img src="https://www.runoob.com/wp-content/uploads/2014/06/kittens.jpg" alt="通用的占位符缩略图"> -->
                    <div class="caption">
                        <h3>缩略图标签</h3>
                        <p>一些示例文本。一些示例文本。</p>
                    </div>
                </div>
                <div class="thumbnail">
                    <div class="caption">
                        <h3>缩略图标签</h3>
                        <p>一些示例文本。一些示例文本。</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-9">
                <div class="contentListWrap" style="border: 1px #F0F2F7 solid;">
                    <article class="articleList" style="padding: 25px;border-bottom: 1px #F0F2F7 solid;">
                        <h4><strong>文章一 </strong><small>2019年5月9日 11点47分</small></h4>
                        <div>
                            <p>以下是一些常用的基本语法 嵌套操作符(Nesting operators) 嵌套操作符用于将缩写元素放置在生成的树中,是否应放置在上下文元素的内部或附近. 子级:> 通过>标识元素可以生成嵌套子级元素,可以配合元素属性进行连写
                            </p>
                        </div>
                    </article>
                    <article class="articleList" style="padding: 25px;border-bottom: 1px #F0F2F7 solid;">
                        <h4><strong>文章一 </strong><small>2019年5月9日 11点47分</small></h4>
                        <div>
                            <p>以下是一些常用的基本语法 嵌套操作符(Nesting operators) 嵌套操作符用于将缩写元素放置在生成的树中,是否应放置在上下文元素的内部或附近. 子级:> 通过>标识元素可以生成嵌套子级元素,可以配合元素属性进行连写
                            </p>
                        </div>
                    </article>
                    <article class="articleList" style="padding: 25px;border-bottom: 1px #F0F2F7 solid;">
                        <h4><strong>文章一 </strong><small>2019年5月9日 11点47分</small></h4>
                        <div>
                            <p>以下是一些常用的基本语法 嵌套操作符(Nesting operators) 嵌套操作符用于将缩写元素放置在生成的树中,是否应放置在上下文元素的内部或附近. 子级:> 通过>标识元素可以生成嵌套子级元素,可以配合元素属性进行连写
                            </p>
                        </div>
                    </article>
                    <article class="articleList" style="padding: 25px;border-bottom: 1px #F0F2F7 solid;">
                        <h4><strong>文章一 </strong><small>2019年5月9日 11点47分</small></h4>
                        <div>
                            <p>以下是一些常用的基本语法 嵌套操作符(Nesting operators) 嵌套操作符用于将缩写元素放置在生成的树中,是否应放置在上下文元素的内部或附近. 子级:> 通过>标识元素可以生成嵌套子级元素,可以配合元素属性进行连写
                            </p>
                        </div>
                    </article>
                    <article class="articleList" style="padding: 25px;border-bottom: 1px #F0F2F7 solid;">
                        <h4><strong>文章一 </strong><small>2019年5月9日 11点47分</small></h4>
                        <div>
                            <p>以下是一些常用的基本语法 嵌套操作符(Nesting operators) 嵌套操作符用于将缩写元素放置在生成的树中,是否应放置在上下文元素的内部或附近. 子级:> 通过>标识元素可以生成嵌套子级元素,可以配合元素属性进行连写
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <!-- <PolygonBox></PolygonBox> -->
        <!-- <p>{{ msg }}</p> -->
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
