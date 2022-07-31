package com.cegebest.demo.ui.response.model;

public class MovieBrief {
	private String title;
	private int voteAverage;
	private String releaseDate;
	private String posterPath;

	public MovieBrief() {}
	
	public MovieBrief(String title, int voteAverage, String releaseDate, String posterPath) {
		this.title = title;
		this.voteAverage = voteAverage;
		this.releaseDate = releaseDate;
		this.posterPath = posterPath;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getVoteAverage() {
		return voteAverage;
	}

	public void setVoteAverage(int voteAverage) {
		this.voteAverage = voteAverage;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getPosterPath() {
		return posterPath;
	}

	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}
}
