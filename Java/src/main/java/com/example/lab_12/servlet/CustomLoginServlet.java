package com.example.lab_12.servlet;

import com.example.lab_12.dao.UserDao;
import com.example.lab_12.dao.impl.UserDaoImpl;
import com.example.lab_12.pojo.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/CustomLoginServlet")
public class CustomLoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CustomLoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//设置网页字符编码集
        response.setContentType("text/html;charset=utf-8");
        
        //设置接收参数
        String username = request.getParameter("username");
        String password = request.getParameter("password");
		System.out.println("username:" + username + "passsword:" + password);
        
      	UserDao td = new UserDaoImpl();
      	User user=new User();

        user = td.selectByUser(username, password);
		if(user != null){
			response.getWriter().append("success");
		} else {
			response.getWriter().append("fail");
		}

	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
