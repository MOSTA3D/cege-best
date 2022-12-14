package com.cegebest.demo.facades;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cegebest.demo.ui.response.model.MovieDetails;
import com.cegebest.demo.ui.response.model.PopularRouteReturn;

@Service
public class RestClientFacad {
	@Autowired
	private final RestTemplate restTemplate ;
	private String apiKey;
	private String apiUrl;
	
	public RestClientFacad(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}
	
	
	public String getApiKey() {
		return apiKey;
	}


	public void setApiKey(String apiKey) {
		this.apiKey = apiKey;
	}


	public String getApiUrl() {
		return apiUrl;
	}


	public void setApiUrl(String apiUrl) {
		this.apiUrl = apiUrl;
	}


	public PopularRouteReturn getRequest(String route, String parameters) {
		String fullUrl = (apiUrl + route + "?api_key=" + apiKey + "&" + parameters);
		System.out.println('\n' + fullUrl + '\n');
		return restTemplate.getForEntity(fullUrl, PopularRouteReturn.class).getBody();
	}
	
	public MovieDetails getMovieDetails(String route, String parameters) {
		String fullUrl = (apiUrl + route + "?api_key=" + apiKey + "&" + parameters);
		System.out.println('\n' + fullUrl + '\n');
		return restTemplate.getForEntity(fullUrl, MovieDetails.class).getBody();
	}
	
//	public PopularRouteReturn getRequest(int page) {
//		String fullUrl = (apiUrl + "api_key=" + apiKey + "&page=" + page);
//		System.out.println('\n' + fullUrl + '\n');
//		return restTemplate.getForEntity(fullUrl, PopularRouteReturn.class).getBody();
//	}
	
//	public <ReturnType> ReturnType get() {
//		String fullUrl = (apiUrl + "api_key=" + apiKey + "&page=");
//		System.out.println('\n' + fullUrl + '\n');
//		return restTemplate.getForEntity(fullUrl, ReturnType.class).getBody();
//	}
}
