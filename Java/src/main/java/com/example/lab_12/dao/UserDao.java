package com.example.lab_12.dao;

import com.example.lab_12.pojo.User;

public interface UserDao {
    //获取全部信息
//    public List<Teacher> getAll();
//    //按条件查询（单条）
//    public List<Teacher> findInfo(String no);
//    //按条件查询（多条）
//    public List<Teacher> someInfo(boolean cpp);
//    //添加信息
//    public int addInfo(Teacher teacher);
//    //修改信息
//    public int modInfo(Teacher teacher);
//    //删除信息
//    public int delInfo(String no);
    //登录
    public User selectByUser(String username, String password);
}
