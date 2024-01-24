package com.app.demo.service;

import com.app.demo.models.Student;
import com.app.demo.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


//JPA ra method implementation

// .save help to insert the upcoming data from  post request
@Service
public class StudentService {

    @Autowired
    public StudentRepo studentRepository;
    public void insertStudent(Student student){
        studentRepository.save(student);
    }

//    Function for getting all students name
    public List<String> allStudentsName(){
        List<String> names = new ArrayList<>();
        for(Student st: studentRepository.findAll()){
            names.add(st.getName());
        }
        return names;
    }

//    Funtion for allstudent details
    public Iterable<Student> getStudent() {
        return studentRepository.findAll();
    }
}
