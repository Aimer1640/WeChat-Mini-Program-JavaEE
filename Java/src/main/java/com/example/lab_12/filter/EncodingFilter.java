package com.example.lab_12.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
import java.io.IOException;

@WebFilter(
        filterName = "EncodingFilter", urlPatterns = {"/*"}, initParams = {@WebInitParam(name="encode",value = "utf-8")}
        )
public class EncodingFilter implements Filter {
    private String encode="";


    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException,ServletException  {
        request.setCharacterEncoding(encode);
        response.setContentType("text/html;charset="+encode);

        chain.doFilter(request, response);
    }

    public void init(FilterConfig fConfig) throws ServletException {
        encode=fConfig.getInitParameter("encode");
    }

    public void destroy() {
    }

}
