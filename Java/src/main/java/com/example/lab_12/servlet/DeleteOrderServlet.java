package com.example.lab_12.servlet;


import com.example.lab_12.dao.OrderDao;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "DeleteOrderServlet", value = "/deleteOrderServlet")
public class DeleteOrderServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1. 收集数据
        request.setCharacterEncoding("utf-8");
        String id=request.getParameter("id");
        //2. 信息处理：使用JDBC删除指定ID的专业信息
        OrderDao orderDao=new OrderDao();
        orderDao.deleteOrderById(id);
        //3. 选择视图显示结果
        response.sendRedirect("showOrderServlet");
    }
}
