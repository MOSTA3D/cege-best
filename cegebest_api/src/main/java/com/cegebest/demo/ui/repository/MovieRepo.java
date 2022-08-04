package com.cegebest.demo.ui.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cegebest.demo.ui.entites.Movie;
import com.cegebest.demo.ui.response.model.MovieDetails;

public interface MovieRepo extends CrudRepository<MovieDetails, Long>{
//	public List<Movie> findByTitleContains(String title);
}
