package com.app.demo.models;


import jakarta.persistence.*;

@Entity
public class Store {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long sId;

    @Column(unique = true)
    private String sName;

    @Column(unique = true)
    private String sAddrs;
    @Column(columnDefinition = "bigInt Default 0")
    private Long dSale;
    @Column(columnDefinition = "bigInt Default 0")
    private Long mSale;
    @Column(columnDefinition = "bigInt Default 0")
    private Long tSale;

    public Store(Long sId, String sName, Long dSale, Long mSale, Long tSale, String sAddrs) {
        this.sId = sId;
        this.sName = sName;
        this.dSale = dSale;
        this.mSale = mSale;
        this.tSale = tSale;
        this.sAddrs = sAddrs;
    }

    public Store() {
    }

    public Long getsId() {
        return sId;
    }

    public void setsId(Long sId) {
        this.sId = sId;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public Long getdSale() {
        return dSale;
    }

    public void setdSale(Long dSale) {
        this.dSale = dSale;
    }

    public Long getmSale() {
        return mSale;
    }

    public void setmSale(Long mSale) {
        this.mSale = mSale;
    }

    public Long gettSale() {
        return tSale;
    }

    public void settSale(Long tSale) {
        this.tSale = tSale;
    }

    public String getsAddrs() {
        return sAddrs;
    }

    public void setsAddrs(String sAddrs) {
        this.sAddrs = sAddrs;
    }

    @Override
    public String toString() {
        return "Store{" +
                "sId=" + sId +
                ", sName='" + sName + '\'' +
                ", dSale=" + dSale +
                ", mSale=" + mSale +
                ", tSale=" + tSale +
                ", aAddrs=" + sAddrs +
                '}';
    }
}
