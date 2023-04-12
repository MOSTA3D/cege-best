package com.cegebest.demo.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DetailedMovieFormat {
	private int id;
	private boolean adult;
	private String backdrop_path;
	private boolean belongs_to_collection;
	private int budget;
	private List<String> genres;
	private String homepage;
}
