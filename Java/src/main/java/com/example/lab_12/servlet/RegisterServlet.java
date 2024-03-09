package com.example.lab_12.servlet;

import com.example.lab_12.dao.AdminDao;
import com.example.lab_12.entity.Admin;
import com.example.lab_12.utils.MD5;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "RegisterServlet", value = "/registerServlet")
public class RegisterServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        //1.收集信息
        String account=request.getParameter("account");
        String password=request.getParameter("password");
        //使用MD5加密或者使用其他方式加密
        //2040706101 杨艾琳
        try {
            password=MD5.generateCode(password);
        } catch (Exception e) {
            e.printStackTrace();
        }

        //2.调用模型进行信息处理（实现将收集信息添加到数据库中）
        AdminDao dao=new AdminDao();
        Admin admin=new Admin();
        admin.setAccount(account);
        admin.setPassword(password);
        int rows= 0;
        try {
            rows = dao.addUser(admin);
        } catch (Exception e) {
            e.printStackTrace();
        }
        response.setCharacterEncoding("utf-8");
        if (rows>0)

             response.sendRedirect("login.jsp");
        else
            response.getWriter().print("注册失败！");

    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }
}
