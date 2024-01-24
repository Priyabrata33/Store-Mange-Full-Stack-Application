package com.app.demo.service;

import com.app.demo.models.MyNum;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class FullStackService {
    public int sumOfAll(@RequestBody MyNum nums){
        return (nums.getNum() * (nums.getNum() +1))/2;
    }
}
