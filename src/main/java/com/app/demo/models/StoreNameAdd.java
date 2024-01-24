package com.app.demo.models;

public class StoreNameAdd {
   private String sName;
    private String sAdd;

    public StoreNameAdd(String sName, String sAdd) {
        this.sName = sName;
        this.sAdd = sAdd;
    }

    public StoreNameAdd() {

    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public String getsAdd() {
        return sAdd;
    }

    public void setsAdd(String sAdd) {
        this.sAdd = sAdd;
    }

    @Override
    public String toString() {
        return "StoreNameAdd{" +
                "sName='" + sName + '\'' +
                ", sAdd='" + sAdd + '\'' +
                '}';
    }
}
