package com.cegebest.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "movies")
@Setter
@Getter
@NoArgsConstructor
public class Movie {
	@Id
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
