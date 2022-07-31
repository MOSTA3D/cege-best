package com.cegebest.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CegebestApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CegebestApiApplication.class, args);
		System.out.println("SERVER INIT...");
	}

}
