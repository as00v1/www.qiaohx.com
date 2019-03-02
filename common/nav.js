Vue.component('todo-item',{
    props: ['todo'],
    template: '<li><a v-bind:href="todo.href">{{ todo.text }}</a></li>'
})

var app1 = new Vue({
    el: "#app-1",
    data: {
        list: [
            {id: 0, text: "蔬菜", href: 'pages/tools.html'},
            {id: 1, text: "牛奶", href: '#'},
            {id: 2, text: "蛋白质", href: '#'}
        ]
    }
});

Vue.component('foot-nav',{
    template: '<footer>Copyright &copy; 2019. www.qiaohx.com All rights reserved.</footer>'
})
var app2 = new Vue({
    el: "#app-2"
})
