package com.example.lab_12.dao;

import com.example.lab_12.pojo.Order;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class OrderDao {
    Connection conn=null;
    Statement st=null;
    ResultSet rs=null;

    String url = "jdbc:mysql://localhost:3306/work?serverTimezone=UTC&characterEncoding=utf-8&useOldAliasMetadataBehavior=true";

    void  connectDB() throws Exception{
        Class.forName("com.mysql.jdbc.Driver");
        conn= DriverManager.getConnection(url,"root","root");
    }
    void closeDB(Connection conn) throws Exception{
        if (conn!=null){
            conn.close();
        }
    }


    //查询购票
    public List<Order> findAllOrders() throws Exception{
        List <Order> orders=new ArrayList<Order>();
        connectDB();
        st=conn.createStatement();
        String sql="select * from tb_order";
        rs=st.executeQuery(sql);
        while(rs.next()){
            Order order=new Order();
            order.setId(rs.getString("id"));
            order.setSigthname(rs.getString("sigthname"));
            order.setCustomname(rs.getString("customname"));
            order.setNum(rs.getString("num"));
            order.setState(rs.getString("state"));
            order.setPhoto(rs.getString("photo"));
            orders.add(order);
        }
        if (rs!=null)
            rs.close();
        st.close();
        closeDB(conn);
        return orders;
    }

    //添加专业名称
    public int addOrder(Order order){
        int rows=0;
        //2. 信息处理：使用JDBC添加专业信息
        try {
            //2.1 加载驱动程序
            Class.forName("com.mysql.jdbc.Driver");
            //2.2 建立与数据库的连接
            String url = "jdbc:mysql://localhost:3306/work";
            Connection conn = DriverManager.getConnection(url, "root", "root");
            //2.3 创建预处理命令对象
            String sql="insert into tb_order(id,sigthname,customname,state,num,photo) values(?,?,?,?,?,?)";
            PreparedStatement ps=conn.prepareStatement(sql);
            //2.4 执行SQL语句
            ps.setString(1,order.getId());
            ps.setString(2,order.getSigthname());
            ps.setString(3,order.getCustomname());
            ps.setString(4,order.getState());
            ps.setString(5,order.getNum());
            ps.setString(6,order.getPhoto());
            rows=ps.executeUpdate();
            //2.5 释放资源
            ps.close();	conn.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return rows;

    }


    //根据专业编号查找专业信息
    public Order findOrderById(String id) {
        Order order = new Order();
        try {
            //1.使用JDBC查询所有专业信息
            //1.1 加载驱动程序
            Class.forName("com.mysql.jdbc.Driver");
            //1.2 建立与数据库的连接
            String url = "jdbc:mysql://localhost:3306/work";
            Connection conn = DriverManager.getConnection(url, "root", "root");
            //1.3 创建预处理命令对象
            String sql = "SELECT * FROM tb_order where id='" + id + "'";
            PreparedStatement ps = conn.prepareStatement(sql);
            //1.4 执行SQL语句
            //ps.setString(1,id);
            ResultSet rs = ps.executeQuery(sql);
            if (rs.next()) {
                order.setId(rs.getString("id"));
                order.setSigthname(rs.getString("sigthname"));

                order.setCustomname(rs.getString("customname"));
                order.setNum(rs.getString("num"));
                order.setState(rs.getString("state"));
                order.setPhoto(rs.getString("photo"));
            }
            //1.5 释放资源
            rs.close();
            ps.close();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return order;

    }

    //修改专业信息
    public int updateOrder(Order order){
        int rows=0;
        try {
            //2.1 加载驱动程序
            Class.forName("com.mysql.jdbc.Driver");
            //2.2 建立与数据库的连接
            String url = "jdbc:mysql://localhost:3306/work";
            Connection conn = DriverManager.getConnection(url, "root", "root");
            //2.3 创建预处理命令对象
            String sql="update tb_order set sigthname=? where id=?";
            PreparedStatement ps=conn.prepareStatement(sql);
            //2.4 执行SQL语句
            ps.setString(2,order.getId());
            ps.setString(1,order.getSigthname());
            rows=ps.executeUpdate();
            //2.5 释放资源
            ps.close();	conn.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return rows;
    }


    //删除专业
    public int deleteOrderById(String id) {
        int rows = 0;
        try {
            //2.1 加载驱动程序
            Class.forName("com.mysql.jdbc.Driver");
            //2.2 建立与数据库的连接
            String url = "jdbc:mysql://localhost:3306/work";
            Connection conn = DriverManager.getConnection(url, "root", "root");
            //2.3 创建预处理命令对象
            String sql = "delete from tb_order where id=?";
            PreparedStatement ps = conn.prepareStatement(sql);
            //2.4 执行SQL语句
            ps.setString(1, id);
            rows = ps.executeUpdate();
            //2.5 释放资源
            ps.close();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return rows;
    }
}
