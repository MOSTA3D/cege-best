package com.cegebest.demo.ui.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cegebest.demo.ui.response.model.MovieBrief;
import com.cegebest.demo.ui.response.model.MovieDetails;
import com.cegedim.demo.ui.services.MovieService;

@RestController
@RequestMapping("/movies")
public class MovieController {
	
	private MovieService movieService;
	
	public MovieController() {}
	@Autowired
	public MovieController(MovieService movieService) {
		this.movieService = movieService;
	}
	
	@GetMapping(path="/popular", produces= {
		MediaType.APPLICATION_JSON_VALUE
	})
	public ResponseEntity<List<MovieBrief>> getPopularMovies(@RequestParam int page){
		List<MovieBrief> movies = movieService.getPopularMovies(page);
		return new ResponseEntity<>(movies, HttpStatus.OK);
		
	}

	@GetMapping("/search")
	public ResponseEntity<List<MovieBrief>> getSearchMovies(@RequestParam String query){
		List<MovieBrief> movies = movieService.getSearchList(query);
		return new ResponseEntity<>(movies, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<MovieDetails> getMovieDetails(@PathVariable Long id){
		MovieDetails movieDetails = movieService.getMovieDetails(id);
		return new ResponseEntity<>(movieDetails, HttpStatus.OK);
	}
}
