package com.example.lab_12.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "VaildationFilter",urlPatterns = {"/admin/*"})
public class VaildationFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpSession session=((HttpServletRequest)req).getSession();
        if (session.getAttribute("user")==null){
            ((HttpServletResponse)resp).sendRedirect("/lab_7_2/login.jsp");
        }else {
            chain.doFilter(req, resp);
        }


    }

    public void init(FilterConfig config) throws ServletException {

    }

}
