package com.example.lab_12.servlet;


import com.example.lab_12.dao.OrderDao;
import com.example.lab_12.pojo.Order;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "AddOrderServlet", value = "/addOrderServlet")
public class AddOrderServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        String id=request.getParameter("id");
        String sigthname=request.getParameter("sigthname");

        String customname=request.getParameter("customname");
        String num=request.getParameter("num");
        String state=request.getParameter("state");
        String photo=request.getParameter("photo");
        //封装
        Order order=new Order();
        order.setId(id);
        order.setSigthname(sigthname);

        order.setCustomname(customname);
        order.setNum(num);
        order.setState(state);
        order.setPhoto(photo);

        OrderDao orderDao=new OrderDao();
        orderDao.addOrder(order);

        //3. 选择视图显示结果
        response.sendRedirect("showOrderServlet");
    }
}
