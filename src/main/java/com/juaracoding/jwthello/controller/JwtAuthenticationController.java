package com.juaracoding.jwthello.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.juaracoding.jwthello.config.JwtTokenUtil;
import com.juaracoding.jwthello.model.DAOUser;
import com.juaracoding.jwthello.model.JwtRequest;
import com.juaracoding.jwthello.model.JwtResponse;
import com.juaracoding.jwthello.service.JwtUserDetailsService;
import com.juaracoding.jwthello.service.UserService;

@RestController
public class JwtAuthenticationController {
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private JwtTokenUtil tokenUtil;

	@Autowired
	private JwtUserDetailsService udService;
	@Autowired
	private UserService uService;
	
	@PostMapping("/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = udService.loadUserByUsername(authenticationRequest.getUsername());
		
		final String token = tokenUtil.generateToken(userDetails,uService.findUserByUsername(authenticationRequest.getUsername()).getRole());

		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> saveUser(@RequestBody DAOUser user){
		return ResponseEntity.ok(udService.save(user));
	}
	
	private void authenticate(String username,String password) throws Exception {
		try {
			authManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}
