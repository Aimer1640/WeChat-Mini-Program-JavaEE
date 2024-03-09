package com.example.lab_12.service.impl;

import com.example.lab_12.dao.IAdminDao;
import com.example.lab_12.dao.impl.AdminDaoImpl;
import com.example.lab_12.entity.Admin;
import com.example.lab_12.service.IAdminService;

public class AdminServiceImpl implements IAdminService {
    @Override
    public Admin login(Admin admin) throws Exception {
        IAdminDao adminDao=new AdminDaoImpl();
        return adminDao.checkUser(admin);
    }
}
