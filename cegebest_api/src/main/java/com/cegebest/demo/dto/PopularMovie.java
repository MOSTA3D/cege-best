package com.cegebest.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PopularMovie {
	private int id;
	private boolean adult;
	private String backdrop_path;
	private List<Integer> genre_ids;
	private String original_title;
	private String overview;
	private int popularity;
	private String poster_path;
	private String release_date;
	private String title;
	private boolean video;
	private int vote_average;
	private int vote_count;
}
