package com.cegebest.demo.ui.response.model;

public class MovieBrief {
	private String title;
	private int vote_average;
	private String release_date;
	private String poster_path;
	private int id;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public MovieBrief() {}
	
	public MovieBrief(String title, int vote_average, String release_date, String poster_path, int id) {
		this.id = id;
		this.title = title;
		this.vote_average = vote_average;
		this.release_date = release_date;
		this.poster_path = poster_path;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getVoteAverage() {
		return vote_average;
	}

	public void setVoteAverage(int vote_average) {
		this.vote_average = vote_average;
	}

	public String getReleaseDate() {
		return release_date;
	}

	public void setReleaseDate(String releaseDate) {
		this.release_date = releaseDate;
	}

	public String getPosterPath() {
		return poster_path;
	}

	public void setPosterPath(String posterPath) {
		this.poster_path = posterPath;
	}
}
