package com.cegebest.demo.ui.response.model;

import java.util.List;

public class PopularRouteReturn {
	private int page;
	private int total_pages;
	private int total_results;
	private List<PopularMovieFormat> results;
	
	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getTotal_pages() {
		return total_pages;
	}

	public void setTotal_pages(int total_pages) {
		this.total_pages = total_pages;
	}

	public int getTotal_results() {
		return total_results;
	}

	public void setTotal_results(int total_results) {
		this.total_results = total_results;
	}

	public List<PopularMovieFormat> getResults() {
		return results;
	}

	public void setResults(List<PopularMovieFormat> results) {
		this.results = results;
	}
}
