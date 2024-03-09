package com.example.lab_12.servlet;
import com.example.lab_12.dao.AdminDao;
import com.example.lab_12.entity.Admin;
import com.example.lab_12.utils.MD5;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

import java.io.PrintWriter;
import java.net.URLEncoder;

@WebServlet(name = "LoginServlet",value = "/loginServlet")
public class LoginServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // 得到提交的验证码
        String code = request.getParameter("code");
        //获取session中的验证码
        HttpSession session = request.getSession();
        String randStr = (String)session.getAttribute("randStr");
        response.setCharacterEncoding("utf-8");
        PrintWriter out = response.getWriter();
        // 判断用户输入的验证码是否正确，若不正确，则页面重定向到login.jsp页面
        if(!code.equals(randStr)){
            out.println("验证码错误！");
//            response.sendRedirect("login.jsp");

        } else {
            //1.收集信息
            String account = request.getParameter("account");
            String password = request.getParameter("password");
            //2040706101 杨艾琳
            try {
                password = MD5.generateCode(password);
            } catch (Exception e) {
                e.printStackTrace();
            }
            //2.调用模型进行信息处理
            AdminDao dao = new AdminDao();
            try {
                Admin admin = dao.login2(account, password);
                if (admin != null) {
                    request.getSession().setAttribute("account", account);
                    response.addCookie(new Cookie("account", URLEncoder.encode(account)));
                    response.addCookie(new Cookie("password", URLEncoder.encode(password)));
                    response.sendRedirect("index.jsp");
                } else {
                    response.sendRedirect("login.jsp");
                }
            } catch (Exception e) {
                e.printStackTrace();
            }

      }
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }
}
