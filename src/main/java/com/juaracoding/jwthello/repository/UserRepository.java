package com.juaracoding.jwthello.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juaracoding.jwthello.model.DAOUser;

public interface UserRepository extends JpaRepository<DAOUser, Long>{
	DAOUser findByUsername(String username);
}
