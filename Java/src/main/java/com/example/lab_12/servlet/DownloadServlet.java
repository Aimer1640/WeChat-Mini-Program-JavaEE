package com.example.lab_12.servlet;



import com.example.lab_12.utils.MyUtil;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/downloadServlet")
public class DownloadServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //2040706101_杨艾琳
        //获取文件名
        String filename=request.getParameter("resPath");
        filename= MyUtil.toUTF8String(filename);
        //下载对话框
        response.setHeader("Context-Type","application/x-msdownload");
        response.setHeader("Content-Disposition","attachment;filename="+filename);

        RequestDispatcher down=request.getRequestDispatcher("/uploadFile/"+filename);
        down.forward(request,response);

    }
}
