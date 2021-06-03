package com.juaracoding.jwthello.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloWorldController {

	@GetMapping("/")
	public String getHello() {
		return "Hello world";
	}
	@GetMapping("/khususadmin")
	public String getAdmin() {
		return "Hello Admin";
	}
}
