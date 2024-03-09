package com.example.lab_12.dao.impl;

import com.example.lab_12.dao.IAdminDao;
import com.example.lab_12.entity.Admin;
import com.example.lab_12.utils.DBConn;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class AdminDaoImpl implements IAdminDao {
	
	private Connection conn = null;
	private PreparedStatement ps;

	//返回登录用户信息
	public Admin checkUser(Admin admin) throws Exception {
		conn= DBConn.getConnection();
		String sql = "select * from tb_admin where account=? and password=?";
		ps=conn.prepareStatement(sql);
		ps.setString(1, admin.getAccount());
		ps.setString(2, admin.getPassword());
		ResultSet rs=ps.executeQuery();
		Admin resultUser=null;
		if (rs.next()) {
			resultUser=new Admin();
			resultUser.setAccount(rs.getString("account"));
			resultUser.setPassword(rs.getString("password"));
		}
		return resultUser;
	}
}
