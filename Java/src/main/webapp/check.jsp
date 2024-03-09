<%@ page contentType="text/html;charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
    <title>确认</title>
    <style>
        body {
            background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
            background-size: 100% 130%;
        }

        #login_box {
            width: 40%;
            height: 400px;
            background-color: #00000060;
            margin: auto;
            margin-top: 10%;
            text-align: center;
            border-radius: 10px;
            padding: 50px 50px;
        }

        h2 {
            color: #ffffff90;
            margin-top: 5%;
        }

        #input-box {
            margin-top: 5%;
        }

        span {
            color: #fff;
        }

        input {
            border: 0;
            width: 60%;
            font-size: 15px;
            color: #fff;
            background: transparent;
            border-bottom: 2px solid #fff;
            padding: 5px 10px;
            outline: none;
            margin-top: 10px;
        }

        #btn_register{
            width: 350px;
            height: 45px;
            margin: 0px 4px;
            border-radius: 8px; /*圆角矩形*/
            text-indent: 5px; /*里面隐形的字体首行缩进*/
            margin: 5px auto;
        }

        a {
            color: #b94648;
        }
    </style>

</head>
<body>

<c:set var="account" value="${param.account}" />
<c:set var="password" value="${param.password}" />

<c:if test="${account==''}">
    <c:set var="errortype" value="1" />
    <c:redirect url="register.jsp">
        <c:param name="errortype" value="${errortype}" />
    </c:redirect>
</c:if>
<c:if test="${password==''}">
    <c:set var="errortype" value="2" />
    <c:redirect url="register.jsp">
        <c:param name="errortype" value="${errortype}" />
    </c:redirect>
</c:if>

<form action="registerServlet" name="loginForm" method="post">
    <div id="login_box">
        <h2>REGISTER</h2>
        <div id="input_box">
            <input class="inputinfo" name="account" type="text" value="${account}">
        </div>
        <div class="input_box">
            <input class="inputinfo" name="password" type="password" value="${password}">
        </div>

        <input id="btn_register" type="submit" value="确认注册" />

    </div>
</form>

</body>
</html>
