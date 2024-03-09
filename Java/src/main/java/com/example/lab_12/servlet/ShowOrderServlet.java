package com.example.lab_12.servlet;

//import com.example.lab_12.dao.MajorDao;
//import com.example.lab_12.pojo.Major;

import com.example.lab_12.dao.OrderDao;
import com.example.lab_12.pojo.Order;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "ShowOrderServlet", value = "/showOrderServlet")
public class ShowOrderServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //定义所有专业的集合
        ArrayList<Order> allOrders=new ArrayList<Order>();
        OrderDao orderDao=new OrderDao();
        try {
            allOrders= (ArrayList<Order>) orderDao.findAllOrders();
        }catch (Exception e){
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        //2. 用session保存所有专业信息
        request.getSession().setAttribute("allOrders",allOrders);
//        session.setAttribute("allMajors",allMajors );

        //添加分页功能
        //2040706101_杨艾琳
        //每页显示记录数
        int countPerPage=5;
        HttpSession session=request.getSession();
        //获取页码
        String pageIndex=request.getParameter("pageIndex");
        //获取不到页面使设置页码为1
        if (pageIndex==null){
            pageIndex="1";
        }
        int currentPageIndex=Integer.parseInt(pageIndex);
        //获取图书数
        int bookNum=allOrders.size();
        int pageCount;
        if(allOrders.size()%countPerPage==0){
            pageCount=bookNum/countPerPage;
        }
        else {
            pageCount=bookNum/countPerPage+1;
        }
        //获取当前页图书信息

        List pageBooks=new ArrayList<>();
        if (currentPageIndex==pageCount){
            pageBooks=allOrders.subList((currentPageIndex-1)*countPerPage,bookNum);
        }else {
            pageBooks=allOrders.subList((currentPageIndex-1)*countPerPage,currentPageIndex*countPerPage);
        }

        //保存分页数据
        session.setAttribute("pageCount",pageCount);
        session.setAttribute("bookNum",bookNum);
        session.setAttribute("pageBooks",pageBooks);
        session.setAttribute("currentPageIndex",currentPageIndex);
        session.setAttribute("countPerPage",countPerPage);

        //3. 重定向到showAllMajors.jsp
        response.sendRedirect("showOrderList.jsp");
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }
}
