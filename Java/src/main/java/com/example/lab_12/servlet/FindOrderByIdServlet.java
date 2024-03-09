package com.example.lab_12.servlet;


import com.example.lab_12.dao.OrderDao;

import com.example.lab_12.pojo.Order;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "FindOrderByIdServlet", value = "/findOrderByIdServlet")
public class FindOrderByIdServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String id=request.getParameter("id");
        OrderDao orderDao=new OrderDao();
        Order order=orderDao.findOrderById(id);

        System.out.println(order.getSigthname());
        //2. 用session保存专业信息
        HttpSession session=request.getSession();
        session.setAttribute("order",order );
        //3. 重定向到updateMajor.jsp
        response.sendRedirect("updateOrder.jsp");
    }
}
