package com.cegedim.demo.ui.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cegebest.demo.facades.RestClientFacad;
import com.cegebest.demo.ui.response.model.MovieBrief;
import com.cegebest.demo.ui.response.model.PopularRouteReturn;

@Service
public class MovieService {
	private final String url = "https://api.themoviedb.org/3/movie/popular?";
	private final String key = "a97243d7813d31446f6c43284e6854d5";
	
	@Autowired
	private RestClientFacad restClientFacad;
	
	public MovieService(RestClientFacad restClientFacad) {
		this.restClientFacad = restClientFacad;
		this.restClientFacad.setApiKey(this.key);
		this.restClientFacad.setApiUrl(this.url);
	}
	
	public List<MovieBrief> getPopularMovies(int page) {
		PopularRouteReturn pReturn = restClientFacad.getRequest(page);
		List<MovieBrief> movies = new ArrayList<MovieBrief>();
		pReturn.getResults().forEach((temp)->{
			movies.add(new MovieBrief(temp.getTitle(), temp.getVote_average(), temp.getRelease_date(), temp.getPoster_path()));
		});
		return movies;
	}
}
