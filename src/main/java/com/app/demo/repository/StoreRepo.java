package com.app.demo.repository;

import com.app.demo.models.Store;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepo extends JpaRepository<Store,Long> {
}
