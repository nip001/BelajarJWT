package com.juaracoding.jwthello.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.juaracoding.jwthello.model.DAOUser;
import com.juaracoding.jwthello.repository.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository repo;
	
	@Autowired
	PasswordEncoder passEncode;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		List<SimpleGrantedAuthority> roles = null;
		DAOUser user = repo.findByUsername(username);
		
		if(user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
			roles = Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
			return new User(user.getUsername(), user.getPassword(),
					roles);
		
		/*if ("juaracoding".equals(username)) {
			return new User("juaracoding", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}*/
	}

	public DAOUser save(DAOUser user) {
		user.setPassword(passEncode.encode(user.getPassword()));
		return repo.save(user);
	}
}
