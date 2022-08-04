package com.cegebest.demo.ui.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cegebest.demo.facades.RestClientFacad;
import com.cegedim.demo.ui.services.MovieService;

@Configuration
public class BeanConfig {
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
	
	@Bean
	public RestClientFacad restClientFacad() {
		return new RestClientFacad(restTemplate());
	}
	
	@Bean
	public MovieService movieService() {
		return new MovieService(restClientFacad());
	}
	
	
}
