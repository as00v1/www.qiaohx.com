// 全局【头部导航】
Vue.component('top-nav',{
    props: ['list'],
    template:
    `
    <nav class="navbar navbar-inverse" role="navigation" id="myTabs">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#example-navbar-collapse">
                    <span class="sr-only">切换导航</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand active" href="#">首页</a>
            </div>
            <div class="collapse navbar-collapse" id="example-navbar-collapse">
                <ul class="nav navbar-nav" v-for="item in list" v-bind:key="item.id" id="app-1">
                    <li><a>{{ item.text }}</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `
    // '<li><a v-bind:href="todo.href">{{ todo.text }}</a></li>'
})

var top = new Vue({
    el: "#top",
    data: {
        list: [
            {id: 0, text: "蔬菜"},
            {id: 1, text: "牛奶"},
            {id: 2, text: "蛋白质"}
        ]
    }
});

// 全局【底部导航】
Vue.component('foot-nav',{
    template: '<footer>Copyright &copy; 2019. www.qiaohx.com All rights reserved.</footer>'
})
var app2 = new Vue({
    el: "#app-2"
})
