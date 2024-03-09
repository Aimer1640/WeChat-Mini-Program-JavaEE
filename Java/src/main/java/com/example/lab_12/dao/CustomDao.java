package com.example.lab_12.dao;



import com.example.lab_12.pojo.Custom;

import java.util.List;

public interface CustomDao {

    //添加信息
    public int addInfo(Custom custom);
    //修改信息
    public int modInfo(Custom custom);

}
