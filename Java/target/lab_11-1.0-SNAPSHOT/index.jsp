<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%--<!doctype html>--%>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>后台管理界面</title>
    <meta name="description" content="">
    <meta name="keywords" content="index">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <link rel="icon" type="image/png" href="../img/lysf.ico">
    <link rel="stylesheet" href="css/amazeui.min.css" />
    <link rel="stylesheet" href="css/admin.css">
    <link rel="stylesheet" href="css/app.css">
</head>

<body data-type="index">

<header class="am-topbar am-topbar-inverse admin-header">
    <div class="am-topbar-brand">
        <a href="javascript:;" style="padding-left: 18px; color: #3599D6;"
           class=""><strong>旅游景点订单管理系统</strong></a>
    </div>


    <div class="am-collapse am-topbar-collapse" id="topbar-collapse">

        <ul
                class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list tpl-header-list">

            <li><a href="logout" class="tpl-header-list-link">退出登录</a></li>
        </ul>
    </div>
</header>

<div class="tpl-page-container tpl-page-header-fixed">

    <div class="tpl-left-nav tpl-left-nav-hover">
        <div class="tpl-left-nav-title">功能列表</div>
        <div class="tpl-left-nav-list">
            <ul class="tpl-left-nav-menu">
                <li class="tpl-left-nav-item"><a href="showOrderList.jsp"
                                                 class="nav-link active link_a" target="iframe_a"> <i class="am-icon-home"></i> <span>查看订单</span>
                </a></li>
                <li class="tpl-left-nav-item"><a href="addOrder.jsp"
                                                 class="nav-link link_a" target="iframe_a"> <i class="am-icon-check-square-o"></i> <span>添加订单</span>
                </a></li>

<%--                <li class="tpl-left-nav-item"><a href="javascript:;"--%>
<%--                                                 class="nav-link tpl-left-nav-link-list left-nav-link"> <i--%>
<%--                        class="am-icon-tasks"></i> <span>流程管理</span> <i--%>
<%--                        class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right tpl-left-nav-more-ico-rotate"></i>--%>
<%--                </a>--%>
<%--                    <ul class="tpl-left-nav-sub-menu" style="display: block;">--%>
<%--                        <li><a href="sktbg.html" class="link_a" target="iframe_a"> <i--%>
<%--                                class="am-icon-angle-right"></i> <span>开题报告</span>--%>
<%--                        </a> <a href="szqjc.html" class="link_a" target="iframe_a"> <i--%>
<%--                                class="am-icon-angle-right"></i> <span>中期检查</span>--%>
<%--                        </a><!-- <a href="syansou.html" class="link_a" target="iframe_a"> <i--%>
<%--									class="am-icon-angle-right"></i> <span>系统验收</span>--%>
<%--							</a> --><!--  <a href="form-news.html"> <i class="am-icon-angle-right"></i>--%>
<%--									<span>上传论文</span>--%>
<%--							</a>  --><a href="smdb.html" class="link_a" target="iframe_a"> <i--%>
<%--                                class="am-icon-angle-right"></i> <span>免答辩申请</span>--%>
<%--                        </a></li>--%>
<%--                    </ul></li>--%>

<%--                <li class="tpl-left-nav-item"><a href="javascript:;"--%>
<%--                                                 class="nav-link tpl-left-nav-link-list left-nav-link"> <i--%>
<%--                        class="am-icon-wpforms"></i> <span>查看信息</span> <i--%>
<%--                        class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right"></i>--%>
<%--                </a>--%>
<%--                    <ul class="tpl-left-nav-sub-menu">--%>
<%--                        <li><a href="sdbinfo.html" class="link_a" target="iframe_a"> <i--%>
<%--                                class="am-icon-angle-right"></i> <span>答辩/验收信息</span>--%>
<%--                        </a><a href="score.html" class="link_a" target="iframe_a"> <i class="am-icon-angle-right"></i>--%>
<%--                            <span>得分信息</span>--%>
<%--                        </a><a href="smdbinfo.html" class="link_a" target="iframe_a"> <i class="am-icon-angle-right"></i>--%>
<%--                            <span>免答辩申请结果</span>--%>
<%--                        </a></li>--%>
<%--                    </ul></li>--%>

                <li class="tpl-left-nav-item"><a href="logout"
                                                 class="nav-link tpl-left-nav-link-list link_a" target="iframe_a"> <i
                        class="am-icon-download"></i> <span>退出登录</span>
                </a></li>
                <!-- <li class="tpl-left-nav-item"><a href="scomment.html"
                    class="nav-link tpl-left-nav-link-list link_a" target="iframe_a"> <i
                        class="am-icon-comments-o"></i> <span>互动交流</span>
                </a></li> -->
            </ul>
        </div>
    </div>

    <!--begin  -->
    <div class="tpl-content-wrapper">
        <iframe id="iframepage" name="iframe_a" src="showOrderServlet" style="width: 100%;height: 850px;" seamless></iframe>
    </div>
    <!--end  -->

</div>
<div>
    <div class="am-g" style="position: fixed; bottom: 0;">
        <div class="am-u-lg-12">
            <footer data-am-widget="footer" class="am-footer am-footer-default"
                    style="border-radius: 6px;">
                <div class="am-footer-switch"></div>
                <div class="am-footer-miscs ">
                    <p>
                        由 <a href="" title="101" target="_blank">101 杨艾琳</a>
                        提供技术支持
                    </p>
                    <p>copyright &copy; 2022-12-30, All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    </div>
</div>
<div class="am-modal am-modal-no-btn" tabindex="-1" id="file-modal">
    <div class="am-modal-dialog">
        <div class="am-modal-hd">
            上传论文<small>(文件大小不要超过10M)</small><a href="javascript: void(0)" class="am-close am-close-spin"
                                               data-am-modal-close>&times;</a>
        </div>
        <div class="am-modal-bd">
            <form id="upload_form" class="am-form am-form-horizontal" action="/graduation/lunwenController/upload_lunwen" method="post" enctype="multipart/form-data">
                <!-- 		<form class="am-form am-form-horizontal"> -->
                <input type="hidden" id="user_id" name="userId"/>
                <div class="am-form-group am-form-file" style="margin-top: 30px;">
                    <label for="doc-ipt-file-2" class="am-u-sm-3 am-form-label">选择文件</label>
                    <div class="am-u-sm-9">
                        <button type="button" class="am-btn am-btn-default am-btn-sm"
                                style="float: left;">
                            <i class="am-icon-cloud-upload"></i> 选择你的论文
                        </button>
                        <div id="file-list" style="float: left; margin: 2px 0 0 10px;"></div>
                    </div>
                    <input type="file" id="doc-ipt-file-2" name="lunwen">
                </div>
                <button type="submit" id="lunwen_uploadBtn" style="margin-top: 25px;"
                        class="am-btn am-btn-primary am-btn-block">点击完成上传</button>
                <div class="am-progress am-progress-striped am-progress-sm am-active ">
                    <div id="progress_div" class="am-progress-bar am-progress-bar-secondary"  style="width: 0%;display: none;"></div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="am-modal am-modal-alert" tabindex="-1" id="userInfo-modal">
    <div class="am-modal-dialog">
        <div class="am-modal-hd">个人基本信息
            <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>
        </div>
        <div class="am-modal-bd" id="userInfo-bd" style="margin-top: 10px;">
            <form class="am-form am-form-horizontal">
                <div class="am-form-group">
                    <label for="userName" class="am-u-sm-2 am-form-label">姓名</label>
                    <div class="am-u-sm-10">
                        <input type="text" id="userName" name="doc-ipt-1">
                    </div>
                </div>
                <div class="am-form-group">
                    <label class="am-u-sm-2 am-form-label">账号</label>
                    <div class="am-u-sm-10">
                        <input type="text" id="account" disabled>
                    </div>
                </div>
                <div class="am-form-group">
                    <label for="tel" class="am-u-sm-2 am-form-label">电话</label>
                    <div class="am-u-sm-10">
                        <input type="text" id="tel" name="doc-ipt-pwd-6">
                    </div>
                </div>
                <div class="am-form-group">
                    <label class="am-u-sm-2 am-form-label">性别</label>
                    <div class="am-u-sm-10">
                        <label class="am-radio-inline am-fl">
                            <input type="radio" name="radio11" value="1" data-am-ucheck> 男
                        </label>
                        <label class="am-radio-inline am-fl">
                            <input type="radio" name="radio11" value="0" data-am-ucheck> 女
                        </label>
                    </div>
                </div>
                <div class="am-form-group">
                    <label class="am-u-sm-2 am-form-label">头像</label>
                    <div class="am-u-sm-10">
                        <div class="am-form-group am-form-file am-fl">
                            <button type="button" class="am-btn am-btn-default am-btn-sm">
                                <i class="am-icon-cloud-upload"></i> 选择要上传的头像</button>
                            <input type="file" id="portrait" multiple>
                        </div>
                        <small class="am-fl" style="margin:5px 0 0 10px;">(图片大小不要超过10M)</small>
                    </div>
                </div>
            </form>
        </div>
        <div class="am-modal-footer">
            <span class="am-modal-btn" id="updateInfo_btn">修改</span>
        </div>
    </div>
</div>

<div class="am-modal am-modal-alert" tabindex="-1" id="password-modal">
    <div class="am-modal-dialog">
        <div class="am-modal-hd">修改密码
            <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>
        </div>
        <div class="am-modal-bd" style="margin-top: 10px;">
            <form class="am-form am-form-horizontal">
                <div class="am-form-group">
                    <label for="password" class="am-u-sm-2 am-form-label" id="password_label">原始<br>密码</label>
                    <div class="am-u-sm-10">
                        <input type="text" id="password" name="doc-ipt-pwd-3">
                    </div>
                </div>
                <div class="am-form-group">
                    <label for="newPassword" class="am-u-sm-2 am-form-label">新密码</label>
                    <div class="am-u-sm-10">
                        <input type="text" id="newPassword" name="doc-ipt-pwd-4">
                    </div>
                </div>
                <div class="am-form-group">
                    <label for="newPassword2" class="am-u-sm-2 am-form-label" id="newPassword2_label">确认<br>密码</label>
                    <div class="am-u-sm-10">
                        <input type="text" id="newPassword2" name="doc-ipt-pwd-5">
                    </div>
                </div>
            </form>
        </div>
        <div class="am-modal-footer">
            <span class="am-modal-btn" id="updatePassword_btn">修改</span>
        </div>
    </div>
</div>

</body>

</html>