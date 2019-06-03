<template>
    <div class="container">
        
        <div class="">
            <h2>个人资料<span class="glyphicon glyphicon-edit" title="编辑个人资料" data-toggle="modal" data-target="#myModal" aria-hidden="true"></span></h2>
            <hr>
            <div class="col-md-2">
                <img src="../assets/images/lazy-pig.jpg" class="img-circle img-circle-size">
                <p>编辑头像</p>
            </div>
            <div class="col-md-10">
                <p>昵称：飓风狗腿子</p>
                <p>邮箱：2736247443@qq.com</p>
                <p>电话：1310168997</p>
                <p>姓名：不告诉你</p>
                <p>性别：女</p>
                <p>生日：10.05</p>
                <p>地区：北京</p>
                <p>简介：我超酷。</p>
            </div>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">编辑个人资料</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="pet_name" class="col-sm-2 control-label">昵称</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="pet_name" placeholder="请输入昵称">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="true_name" class="col-sm-2 control-label">姓名</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control" id="true_name" placeholder="请输入姓名">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email" class="col-sm-2 control-label">Email</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" id="email" placeholder="请输入Email地址">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone" class="col-sm-2 control-label">电话</label>
                            <div class="col-sm-9">
                                <input type="number" class="form-control" id="phone" placeholder="请输入电话">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone" class="col-sm-2 control-label">性别</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                    <option>男</option>
                                    <option>女</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone" class="col-sm-2 control-label">简介</label>
                            <div class="col-sm-9">
                                <textarea name="" id="" placeholder="请简单的描述一下自己~" class="form-control" cols="3"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">保存</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Other"
    }
</script>
<style scoped>
    .glyphicon {color: #666;}
    .glyphicon:hover {color: #333;}
    h2 {vertical-align: top}
    h2 span {font-size: 14px; padding: 5px;cursor: pointer;}
    .img-circle-size {display: inline-block; width: 100%;}
</style>


