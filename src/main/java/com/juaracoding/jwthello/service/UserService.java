
package com.juaracoding.jwthello.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.juaracoding.jwthello.model.DAOUser;
import com.juaracoding.jwthello.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository uRepo;
	
	public DAOUser findUserByUsername(String username) {
		return uRepo.findByUsername(username);
	}
}
