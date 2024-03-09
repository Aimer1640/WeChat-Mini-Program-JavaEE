package com.example.lab_12.pojo;


public class User {
    private String photo;
    private boolean cpp;
    public boolean isCpp() {
        return cpp;
    }
    public void setCpp(boolean cpp) {
        this.cpp = cpp;
    }
    public float getSalary() {
        return salary;
    }
    public void setSalary(float salary) {
        this.salary = salary;
    }
    public String getBirthday() {
        return birthday;
    }
    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }
    private float salary;

    private String birthday;
    public String getPhoto() {
        return photo;
    }
    public void setPhoto(String photo) {
        this.photo = photo;
    }
    private String  teano;
    public String getTeano() {
        return teano;
    }
    public void setTeano(String teano) {
        this.teano = teano;
    }
    public String getTeaname() {
        return teaname;
    }
    public void setTeaname(String teaname) {
        this.teaname = teaname;
    }
    public String getTeapwd() {
        return teapwd;
    }
    public void setTeapwd(String teapwd) {
        this.teapwd = teapwd;
    }
    public String getTeasex() {
        return teasex;
    }
    public void setTeasex(String teasex) {
        this.teasex = teasex;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    private String  teaname;
    private String  teapwd;
    private String  teasex;
    private String title;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    private String username;
    private String password;


}
