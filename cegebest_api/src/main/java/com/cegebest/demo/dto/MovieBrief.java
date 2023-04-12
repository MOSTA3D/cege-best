package com.cegebest.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovieBrief {
	private int id;
	private String title;
	private int voteAverage;
	private String releaseDate;
	private String posterPath;
}
