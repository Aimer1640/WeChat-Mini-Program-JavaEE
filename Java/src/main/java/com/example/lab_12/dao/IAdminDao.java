package com.example.lab_12.dao;

import com.example.lab_12.entity.Admin;

public interface IAdminDao {
    //返回登录用户信息
    public Admin checkUser(Admin admin)throws Exception;
}
