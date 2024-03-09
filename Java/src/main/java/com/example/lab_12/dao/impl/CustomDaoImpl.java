package com.example.lab_12.dao.impl;


import com.example.lab_12.dao.BaseDao1;
import com.example.lab_12.dao.CustomDao;

import com.example.lab_12.pojo.Custom;

import java.util.ArrayList;
import java.util.List;

public class CustomDaoImpl extends BaseDao1 implements CustomDao {
    List<Custom> customs = new ArrayList<>();

    @Override
    public int addInfo(Custom custom) {
        try {
            if (getConnection()) {
                String sql = "insert into tb_order(id,sigthname,customname,state,num,photo) values(?,?,?,?,?,?)";
                int n = executUpdate(sql, new Object[] {custom.getId(),custom.getSigthname(),custom.getCustomname(),custom.getState(),custom.getNum(),custom.getPhoto()});
                return n;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        } finally {
            closeResources();
        }
        return 0;
    }

    @Override
    public int modInfo(Custom custom) {
        return 0;
    }
}

