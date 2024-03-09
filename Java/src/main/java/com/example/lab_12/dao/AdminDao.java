package com.example.lab_12.dao;

import com.example.lab_12.entity.Admin;
import com.example.lab_12.utils.DBUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class AdminDao {
    public Admin login(String account, String password) throws Exception {
        String sql="select * from tb_admin where account='"+account+"' and password='"+password+"'";
        Connection conn= DBUtil.getCon2();
        Statement st=conn.createStatement();
        ResultSet rs=st.executeQuery(sql);
        if (rs.next()){
            Admin admin=new Admin();
            admin.setAccount(account);
            admin.setPassword(password);
            return admin;
        }
        return null;
    }

    /**
     * 使用PreparedStatement解决SQL注入
     * @param account
     * @param password
     * @return
     * @throws Exception
     */
    //2040706101 杨艾琳
    public Admin login2(String account,String password) throws Exception {
        String sql="select * from tb_admin where account=? and password=?";
        Connection conn= DBUtil.getCon2();
        PreparedStatement ps=conn.prepareStatement(sql);
        ps.setString(1,account);
        ps.setString(2,password);
        ResultSet rs=ps.executeQuery();
        if (rs.next()){
            Admin admin=new Admin();
            admin.setAccount(account);
            admin.setPassword(password);
            return admin;
        }
        return null;
    }

    public int addUser(Admin admin) throws Exception {
        String sql="insert into tb_admin(account,password) values(?,?)";
        Connection conn= DBUtil.getCon2();
        PreparedStatement ps=conn.prepareStatement(sql);
        ps.setString(1,admin.getAccount());
        ps.setString(2,admin.getPassword());
        int rows=ps.executeUpdate();
        return rows;
    }
}
