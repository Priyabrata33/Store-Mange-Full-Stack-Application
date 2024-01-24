package com.app.demo.controller;

import com.app.demo.models.MyNum;
import com.app.demo.service.FullStackService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fullstack")
public class FullStack {
    @CrossOrigin
    @GetMapping("/hello")
    public String hello(){
        return "hello you are connected";
    }
    public FullStackService fullStackService;

    public FullStack(FullStackService fullStackService){
        this.fullStackService = fullStackService;
    }
    @CrossOrigin
    @PostMapping("/sumOfAll")
    public int sumOfAll(@RequestBody MyNum nums){
        return fullStackService.sumOfAll(nums);
    }
}
