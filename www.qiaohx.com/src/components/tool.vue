<template lang="html">
    <section class="container">
        <div class="row">
            <div class="panel panel-default">
                <div class="panel-body">
                    <ul id="tabTitle" class="nav nav-tabs">
                        <li class="active"><a href="#home" data-toggle="tab">加密解密</a></li>
                        <li><a href="#ios" data-toggle="tab">散列哈希</a></li>
                        <li><a href="#java" data-toggle="tab">BASE64</a></li>
                    </ul>
                    <div id="tabContent" class="tab-content">
                        <div class="tab-pane fade in active" id="home">
                            <div class="well" role="form">
                                <ToolItem></ToolItem>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="ios">
                            <p>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple
                                TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。</p>
                        </div>
                        <div class="tab-pane fade" id="java">
                            <p>Enterprise Java Beans（EJB）是一个创建高度可扩展性和强大企业级应用程序的开发架构，部署在兼容应用程序服务器（比如 JBOSS、Web Logic 等）的 J2EE 上。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ToolItem from '@/pages/tool/ToolItem'
export default {
    name: 'Tool',
    components: {
        ToolItem
    }
}
</script>

<style lang="css" scoped>
</style>
