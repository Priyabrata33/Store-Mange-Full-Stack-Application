package com.app.demo.service;


import com.app.demo.models.Store;
import com.app.demo.models.StoreNameAdd;
import com.app.demo.repository.StoreRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StoreService {
    @Autowired
    public StoreRepo storeRepository;

    public void insertStore(Store store){
        storeRepository.save(store);

    }

    public List<String> getAllStoreName(){
        List<String> sName  = new ArrayList<>();
        for(Store st:storeRepository.findAll()) {
            sName.add(st.getsName());
        }
        return sName;
    }
    public List<StoreNameAdd> getAddrsAndName(){
//        List<List<String>> allAddName = new ArrayList<>();
//        for(Store st: storeRepository.findAll()){
//            List<String> addName = new ArrayList<>();
//            addName.add(st.getsName());
//            addName.add(st.getsAddrs());
//            allAddName.add(addName);
//        }
//        ObjectMapper objectmap = new ObjectMapper();
//
//        return allAddName;

        List<Store> stores = storeRepository.findAll();
        return stores.stream().map(e -> {
            return new StoreNameAdd(e.getsName(),e.getsAddrs());
        }).toList();
    }

    /*
    List to stream converrsion
    each element map

     */

}
