package com.example.lab_12.dao.impl;

import com.example.lab_12.dao.BaseDao1;

import com.example.lab_12.dao.UserDao;

import com.example.lab_12.pojo.User;

import java.util.ArrayList;
import java.util.List;

/**
 * Userdao实现类
 * @author
 *
 */
public class UserDaoImpl extends BaseDao1 implements UserDao {

    List<User> users = new ArrayList<>();

    @Override
    public User selectByUser(String username, String password) {
        try {
            if (getConnection()) {
                String sql = "select * from user where username=? and password=?";
                rs = executeSQL(sql, new Object[] {username,password});
                User user = null;
                while (rs.next()) {
                    user = new User();
                    user.setUsername(rs.getString("userName"));
                    user.setPassword(rs.getString("passWord"));
                    if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
                        return user;
                    }
                }
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            closeResources();
        }
        return null;
    }



}

