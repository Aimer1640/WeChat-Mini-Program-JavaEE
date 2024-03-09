<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.example.lab_12.pojo.Major" %>
<%@ page import="java.util.ArrayList" %><%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/12/29
  Time: 18:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<!doctype html>--%>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>后台管理界面</title>
  <meta name="description" content="这是后台管理主页">
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
        <div class=" am-fl"><span class="tpl-content-page-title">订单列表</span></div>
        <div class="am-fr" style="width: 180px;">
          <div class="am-input-group am-input-group-sm">

            <span class="am-input-group-btn" style="width: 30%;">
				        <a href="addOrder.jsp"><button id="searchTeacher" class="am-btn am-btn-default" type="button">添加</button></a>
			</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="teacher_search_title am-panel am-panel-default">
    <div class="am-panel am-panel-default">
      <div class="am-panel-bd am-scrollable-horizontal">
        <table class="am-table am-table-centered am-table-striped am-table-hover">
          <thead>
          <tr>
            <th>序号</th>
            <th>订单编号</th>
            <th>景点名称</th>
            <th>顾客名称</th>
            <th>订单状态</th>
            <th>购买张数</th>
            <th>用户头像</th>
            <th>操作</th>
          </tr>

          </thead>
          <!-- 添加分页链接 -->
          <!-- 2040706101_杨艾琳 -->

          <tbody id="chooseBody">
          <c:forEach items="${pageBooks}" var="order" varStatus="s">
            <form name='form' action='showUpdateInfoServlet'>
              <input type="hidden" name="id" value="${order.id}" />
              <tr>
                <th scope="row">${s.index+1 }</th>

                <td>${order.id }</td>
                <td><a href='showOrderServlet?id=${order.id}'>
                    ${order.sigthname }</a></td>
                <td>${order.customname }</td>
                <td>${order.state }</td>
                <td>${order.num }</td>

<%--                <!-- 点击下载图片 -->--%>
                <td><a href="downloadServlet?resPath=${order.photo}">下载图片</a></td>
<%--                <td style="width: 50px"><a href="downloadServlet?resPath=${order.photo}">${order.photo}</a></td>--%>
                <!-- 点击显示图片 -->
                <td><a href='findOrderByIdServlet?id=${order.id}'>修改|</a><a href='deleteOrderServlet?id=${order.id}'>删除</a></td>
                <td></td>

              </tr>

            </form>

          </c:forEach>
          </tbody>

        </table>
      </div>
      <footer class="am-panel-footer" style="height: 50px;">
        <div class="am-fr">
          <p align="center">
            <a href="showOrderServlet?pageIndex=1">首页</a>
            <c:if test="${currentPageIndex!=1}">
              <a href="showOrderServlet?pageIndex=${currentPageIndex-1}">上一页</a>
            </c:if>
            <c:if test="${currentPageIndex!=pageCount}">
              <a href="showOrderServlet?pageIndex=${currentPageIndex+1}">下一页</a>
            </c:if>
            <a href="showOrderServlet?pageIndex=${pageCount}">尾页</a>
            每页显示记录数是<font color="blue">${countPerPage}</font>条；
            当前页是第<font color="blue">${currentPageIndex}</font>页；
            总页数是<font color="blue">${pageCount}</font>.

          </p>
          <div id="news-Pagination-1"></div>
        </div>
      </footer>
    </div>
  </div>
</div>


</body>

</html>
