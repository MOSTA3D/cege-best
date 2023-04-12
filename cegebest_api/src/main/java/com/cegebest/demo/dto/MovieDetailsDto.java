package com.cegebest.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class MovieDetailsDto {
	private Long id;
	private boolean adult;
	private String backdrop_path;
	private String title;
	private String vote_average;
	private int runtime;
	private String release_date;
	private String original_language;
	private String poster_path;
}
