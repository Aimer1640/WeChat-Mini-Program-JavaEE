<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/12/28
  Time: 16:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
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

    button {
      margin-top: 50px;
      width: 60%;
      height: 30px;
      border-radius: 10px;
      border: 0;
      color: #fff;
      text-align: center;
      line-height: 30px;
      font-size: 15px;
      background-image: linear-gradient(to right, #30cfd0, #330867);
    }
    #btn_submit{
      width: 350px;
      height: 45px;
      margin: 0px 4px;
      border-radius: 8px; /*圆角矩形*/
      text-indent: 5px; /*里面隐形的字体首行缩进*/
      margin: 5px auto;
    }



    #sign_up {
      margin-top: 45%;
      margin-left: 60%;
    }

    a {
      color: #b94648;
    }
  </style>
  <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
  <script type="text/javascript">
    //刷新验证码
    function refresh(){
      loginForm.imgValidate.src =encodeURI("code.jsp?id="+new Date());
    }
    function loginValidate(){
      $.ajax({
        url:"loginServlet",
        type:"json",
        method:"post",
        data:$("#loginForm").serialize(),
        async:true,
        success:function (data){
          if (data=="正确"){
            window.location.href='showAllBooksServlet';
          }else {
            $("#toolTip").html(data);
          }
        },
        error:function (){
          // alert("异步请求错误！")
        }
      });
    }
  </script>
</head>

<body>
<form action="loginServlet" name="loginForm" method="post">
  <div id="login_box">
    <h2>LOGIN</h2>
    <div id="input_box">
      <input class="inputinfo" name="account" type="text" placeholder="请输入用户名">
    </div>
    <div class="input_box">
      <input class="inputinfo" name="password" type="password" placeholder="请输入密码">
    </div>
    <div class="input_box">
      <input type="text" name="code" placeholder="请输入验证码" style="width: 280px;">
      <img name="imgValidate" src="code.jsp" onclick="refresh()">

    </div>
    <input id="btn_submit" type="submit" value="登录" onclick="loginValidate()"/>

    <div><a href="register.jsp">还没有账号？点我注册</a> </div>


  </div>
</form>

</body>
</html>
