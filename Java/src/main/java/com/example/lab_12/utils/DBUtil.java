package com.example.lab_12.utils;

import java.sql.*;

public class DBUtil {
    private static Connection con;
    private static PreparedStatement ps;
    private static ResultSet rs;
    private static final String drivername = "com.mysql.jdbc.Driver";

    public static Connection getCon() throws Exception {
        String url = "jdbc:mysql://127.0.0.1:3306/computer_dept?useSSL=false&serverTimezone=Asia/Shanghai";
        try {
            Class.forName(drivername);
            con = DriverManager.getConnection(url,"root","root");
            return con;
        } catch (SQLException e) {
            System.err.println(e.getMessage());
            throw e;
        }
    }

    public static Connection getCon2() throws Exception {
        String url = "jdbc:mysql://127.0.0.1:3306/work?useSSL=false&serverTimezone=Asia/Shanghai";
        try {
            Class.forName(drivername);
            con = DriverManager.getConnection(url,"root","root");
            return con;
        } catch (SQLException e) {
            System.err.println(e.getMessage());
            throw e;
        }
    }
  
    public static void close() {
        try {
            if (rs != null) {
                rs.close();
            }
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        try {
            if (ps != null) {
                ps.close();
            }
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        try {
            if (con != null) {
                con.close();
            }
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }
}