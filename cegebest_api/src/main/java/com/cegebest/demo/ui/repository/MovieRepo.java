package com.cegebest.demo.ui.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cegebest.demo.ui.entites.Movie;

public interface MovieRepo extends CrudRepository<Movie, Long>{
	public List<Movie> findByTitleContains(String title);
}
