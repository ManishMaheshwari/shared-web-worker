package com.manish;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ServerApplication {

	public static void main(String[] args) {
		System.out.println("Starting...");
		SpringApplication.run(ServerApplication.class, args);
	}

	@RequestMapping(method = {RequestMethod.GET}, value = {"/home"})
	public String home() {
		return "Hello from Server.";
	}
}
