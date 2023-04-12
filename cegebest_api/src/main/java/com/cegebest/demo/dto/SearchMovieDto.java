package com.cegebest.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class SearchMovieDto {
	private int page;
	private int total_pages;
	private int total_results;
	private List<PopularMovie> results;
}
