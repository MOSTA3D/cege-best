package com.cegedim.demo.ui.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.cegebest.demo.facades.RestClientFacad;
import com.cegebest.demo.ui.repository.MovieRepo;
import com.cegebest.demo.ui.response.model.MovieBrief;
import com.cegebest.demo.ui.response.model.MovieDetails;
import com.cegebest.demo.ui.response.model.PopularRouteReturn;

@Service
public class MovieService {
	private String url;
	private String key;
	
	@Autowired
	private RestClientFacad restClientFacad;
	
	@Autowired
	private MovieRepo movieRepo;
	
	public MovieService(RestClientFacad restClientFacad) {
		this.restClientFacad = restClientFacad;
	}
	
	public List<MovieBrief> getPopularMovies(int page) {
		PopularRouteReturn pReturn = restClientFacad.getRequest("/movie/popular", "page=" + page);
		List<MovieBrief> movies = new ArrayList<MovieBrief>();
		pReturn.getResults().forEach((temp)->{
			movies.add(new MovieBrief(temp.getTitle(), temp.getVote_average(), temp.getRelease_date(), temp.getPoster_path(), temp.getId()));
		});
		return movies;
	}
	
	public List<MovieBrief> getSearchList(String query){
		PopularRouteReturn pReturn = restClientFacad.getRequest("/search/movie", "query=" + query);
		List<MovieBrief> movies = new ArrayList<MovieBrief>();
		pReturn.getResults().forEach((temp)->{
			movies.add(new MovieBrief(temp.getTitle(), temp.getVote_average(), temp.getRelease_date(), temp.getPoster_path(), temp.getId()));
		});
		return movies;
	}
	
	public MovieDetails getMovieDetails(Long id) {
		Optional<MovieDetails> optionalDetailedMovie = movieRepo.findById(id);
		if(optionalDetailedMovie.isPresent()) {
			return optionalDetailedMovie.get();
		}else {
			MovieDetails movieDetails = restClientFacad.getMovieDetails("/movie/" + id, "");
			movieRepo.save(movieDetails);
			return movieDetails;
		}
		//restClientFacad.getMovieDetails;
	}
}
