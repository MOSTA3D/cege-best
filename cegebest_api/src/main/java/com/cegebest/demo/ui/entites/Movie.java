package com.cegebest.demo.ui.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Movie {
	@Id
	@Column
	private Long id;
	@Column
	private String title;
	@Column
	private String date;
	@Column
	private String posterPath;
	@Column
	private int voteAverage;

	public Movie(String title, String date, String posterPath, int voteAverage) {
		this.title = title;
		this.date = date;
		this.posterPath = posterPath;
		this.voteAverage = voteAverage;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getPosterPath() {
		return posterPath;
	}

	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}

	public int getVoteAverage() {
		return voteAverage;
	}

	public void setVoteAverage(int voteAverage) {
		this.voteAverage = voteAverage;
	}
}
