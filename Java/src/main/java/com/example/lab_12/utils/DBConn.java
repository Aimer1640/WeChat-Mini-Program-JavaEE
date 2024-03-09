package com.example.lab_12.utils;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConn {
    private static Connection conn = null;
    public static Connection getConnection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/db_booksystem";
            conn = DriverManager.getConnection(url, "root", "root");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return conn;
    }

    public static void closeConnection() throws Exception {
        if (conn != null && !conn.isClosed())
            conn.close();
    }
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Connection connection = DBConn.getConnection();
        System.out.println(connection);

    }
}
