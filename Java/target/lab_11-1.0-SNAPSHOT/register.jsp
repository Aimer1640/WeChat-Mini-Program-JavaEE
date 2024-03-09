<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/12/28
  Time: 16:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REGISTER</title>
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
    <script type="text/javascript">
        //刷新验证码
        function refresh(){
            loginForm.imgValidate.src =encodeURI("code.jsp?id="+new Date());
        }
    </script>
</head>

<body>
<form action="check.jsp" name="loginForm" method="post">
    <div id="login_box">
        <h2>REGISTER</h2>
        <div id="input_box">
            <input class="inputinfo" name="account" type="text" placeholder="请输入用户名">
        </div>
        <div class="input_box">
            <input class="inputinfo" name="password" type="password" placeholder="请输入密码">
        </div>

        <input id="btn_register" type="submit" value="注册" />
        <font color="red"> <%
            //根据错误类型,显示相应信息
            String error = request.getParameter("errortype");//由get返回错误参数值
            if (error != null) {
                int errortype = Integer.parseInt(error);//转换成整数
                switch (errortype)
                {
                    case 1:
                        out.println("账号为空!!");
                        break;
                    case 2:
                        out.println("密码为空!!");
                        break;
                    default:
                }
            }
        %> </font>
    </div>
</form>

</body>
</html>
