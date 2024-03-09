<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/12/29
  Time: 23:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.example.lab_12.pojo.Major" %>
<%@ page import="java.util.ArrayList" %>
<%--<!doctype html>--%>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>学生界面</title>
    <meta name="description" content="这是学生主页">
    <meta name="keywords" content="index">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <link rel="icon" type="image/png" href="../img/lysf.ico">
    <link rel="stylesheet" href="css/amazeui.min.css" />
    <link rel="stylesheet" href="css/pagination.css">
    <link rel="stylesheet" href="css/admin.css">
    <link rel="stylesheet" href="css/app.css">
</head>

<body style="overflow:hidden;" >

<div id="ref_page" style="height: 500px;">
    <div class="teacher_search_title am-panel am-panel-default">
        <div class="am-panel-bd">
            <div class="am-cf">
                <div class=" am-fl"><span class="tpl-content-page-title">添加订单</span></div>
                <div class="am-fr" style="width: 180px;">

                </div>
            </div>
        </div>
    </div>
    <div class="teacher_search_title am-panel am-panel-default">
        <div class="am-panel am-panel-default">
            <div class="am-panel-bd am-scrollable-horizontal">
                <table class="am-table am-table-centered am-table-striped am-table-hover">
                    <form action="addOrderServlet" method="post">
                        订单ID：<input type="text" name="id"><br>
                        景点名称：<input type="text" name="sigthname"/><br>
                        顾客名称：<input type="text" name="customname"/><br>
                        订单状态：<input type="text" name="state"/><br>
                        购买张数：<input type="text" name="num"/><br>
                        用户头像:<input type="file" name="photo" />
                        <input type="submit" value="确认">
                        <input type="reset" value="清空">
                    </form>
                </table>
            </div>
            <footer class="am-panel-footer" style="height: 50px;">
                <div class="am-fr">
                    <div id="news-Pagination-1"></div>
                </div>
            </footer>
        </div>
    </div>
</div>


</body>

</html>

