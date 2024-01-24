package com.app.demo.repository;

import com.app.demo.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

//           Table name, primarykey data type jauta pare define kari channti in model as ID
public interface  StudentRepo extends JpaRepository<Student, Long> {

}
