package com.codewithbhagwat.fullstackbackend.repository;

import com.codewithbhagwat.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long>{
}
