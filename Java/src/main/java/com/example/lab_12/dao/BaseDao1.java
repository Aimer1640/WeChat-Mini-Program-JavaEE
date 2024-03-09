package com.example.lab_12.dao;



import com.example.lab_12.utils.ConfigTools;

import java.sql.*;

/**
 * 数据库连接工具类
 * @author
 *
 */
public class BaseDao1 {
	
	protected ResultSet rs = null;
	protected PreparedStatement ps = null;
	protected Connection conn = null;
	
	public static void main(String[] args) {
		System.out.println();
	}
	//获得数据库连接
	public boolean getConnection() {

		try {
			//加载驱动
			Class.forName(ConfigTools.getProperties().getProperty("driver"));
			//准备URL 连接数据库
			String url = ConfigTools.getProperties().getProperty("url");
			//准备账号密码
			String uname = ConfigTools.getProperties().getProperty("username");
			String upwd = ConfigTools.getProperties().getProperty("userpwd");
//			//加载驱动
//			Class.forName(ConfigTools.getProperties("driver"));
//			//准备URL 连接数据库
//			String url = ConfigTools.getProperties("url");
//			//准备账号密码
//			String uname = ConfigTools.getProperties("username");
//			String upwd = ConfigTools.getProperties("userpwd");
			//通过DriverManager.getConnection获得Connection对象
			 conn = DriverManager.
					getConnection(url, uname, upwd);
			 
			 return true;
			 
		} catch (Exception e) {
			e.printStackTrace();
			 return false;
		}
		
		
	}
	/**
	 * 公共修改  添加  删除
	 * @param sql
	 * @param objs
	 * @return
	 */
	public int executUpdate(String sql,Object[] objs) {
		int updateRows = 0;
		try {
			
			ps = conn.prepareStatement(sql);
			if(objs!=null) {
				//填充占位符
				for(int i = 0;i<objs.length;i++)
				{
					ps.setObject((i+1), objs[i]);
				}
				
			}
			updateRows = ps.executeUpdate();
			return updateRows;
			
		} catch (SQLException e) {
			e.printStackTrace();
			return updateRows;
		}
	}
	
	
	/**
	 * 公共查询
	 * @param sql  携带占位符  ？
	 * @param objs  参数数组 
	 * @return
	 */
	public ResultSet executeSQL(String sql,Object[] objs) {
		try {
		
			ps = conn.prepareStatement(sql);
			if(objs!=null) {
				//填充占位符
				for(int i = 0;i<objs.length;i++)
				{
					ps.setObject((i+1), objs[i]);
				}
				
			}
			rs = ps.executeQuery();
			return rs;
			
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * 释放资源
	 * @return
	 */
	public void closeResources() {
		if(rs!=null) {
			try {
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		if(ps!=null) {
			try {
				ps.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		if(conn!=null) {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}
	
}
