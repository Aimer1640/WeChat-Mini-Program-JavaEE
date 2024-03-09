package com.example.lab_12.servlet;

import com.example.lab_12.dao.CustomDao;

import com.example.lab_12.dao.impl.CustomDaoImpl;

import com.example.lab_12.pojo.Custom;


import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "CustomAddServlet", value = "/CustomAddServlet")
public class CustomAddServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public CustomAddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //设置网页字符编码集
        response.setContentType("text/html;charset=utf-8");

        //设置接收参数
        Custom cu = new Custom();
        cu.setId(request.getParameter("id"));
        if (request.getParameter("sigthname") != null) {
            cu.setSigthname(request.getParameter("sigthname"));
        }
        if (request.getParameter("customname") != null) {
            cu.setCustomname(request.getParameter("customname"));
        }
        if (request.getParameter("state") != null) {
            cu.setState(request.getParameter("state"));
        }
        if (request.getParameter("num") != null) {
            cu.setNum(request.getParameter("num"));
        }
        if (request.getParameter("photo") != null) {
            cu.setPhoto(request.getParameter("photo"));
        }

        CustomDao td = new CustomDaoImpl();
        int n = 0;
        n = td.addInfo(cu);
        if(n>0){
            response.getWriter().append("success");
        } else {
            response.getWriter().append("faill");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }
}
