package com.app.demo.models;


import jakarta.persistence.*;


// entity and  table refer for the JPA to create the table accordingy
@Entity
public class Student {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="student_ID")
    @Id
    private Long id;
    @Column(unique = true)
    private int roll;
    @Column
    private String name;
    @Column
    private String add;




    public Student(int roll, String name, String add, Long id) {
        this.roll = roll;
        this.name = name;
        this.add = add;
        this.id = id;
    }
    public Student() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public int getRoll() {
        return roll;
    }

    public String getName() {
        return name;
    }

    public String getAdd() {
        return add;
    }

    public void setRoll(int roll) {
        this.roll = roll;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAdd(String add) {
        this.add = add;
    }

    @Override
    public String toString() {
        return "Student{" +
                "roll=" + roll +
                ", name='" + name + '\'' +
                ", add='" + add + '\'' +
                '}';
    }
}
