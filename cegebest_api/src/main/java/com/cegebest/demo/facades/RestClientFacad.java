package com.cegebest.demo.facades;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cegebest.demo.ui.response.model.DetailsRouteReturn;
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


	
	// todo: generic get method like the one in the frontend
	public PopularRouteReturn getRequest(int page) {
		String fullUrl = (apiUrl + "popular/?" + "api_key=" + apiKey + "&page=" + page);
		System.out.println('\n' + fullUrl + '\n');
		return restTemplate.getForEntity(fullUrl, PopularRouteReturn.class).getBody();
	}
	
	public DetailsRouteReturn getMovieDetails() {
		String fullUrl = (apiUrl + "i_forget");
		System.out.println('\n' + fullUrl + '\n');
		return restTemplate.getForEntity(fullUrl, DetailsRouteReturn.class).getBody();
	}
}
