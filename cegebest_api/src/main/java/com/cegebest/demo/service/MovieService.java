package com.cegebest.demo.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.cegebest.demo.dto.MovieDetailsDto;
import com.cegebest.demo.dto.SearchMovieDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cegebest.demo.facade.RestClientFacade;
import com.cegebest.demo.repository.MovieRepo;
import com.cegebest.demo.dto.MovieBrief;

import static com.cegebest.demo.utils.Common.getFullUrl;
import static com.cegebest.demo.utils.Common.mapToQueryString;

@Service
public class MovieService {
    private final String url = "https://api.themoviedb.org/3";
    private final String key = "a97243d7813d31446f6c43284e6854d5";
    private String defaultQueryString;
    private Map<String, String> defaultQueryMap;

    @Autowired
    private RestClientFacade restClientFacade;

    @Autowired
    private MovieRepo movieRepo;

    public List<MovieBrief> getPopularMovies(int page) throws IllegalAccessException {
        Map<String, String> popularMovieQueryMap = new HashMap<>(getDefaultQueryMap());
        popularMovieQueryMap.put("page", String.valueOf(page));
        String popularMovieUrl = getFullUrl(url, "/movie/popular", popularMovieQueryMap);
        return getMovieBriefs(popularMovieUrl);
    }

    public List<MovieBrief> getSearchList(String query) throws IllegalAccessException {
        String searchUrl = getFullUrl(url, "/search/movie", getDefaultQueryMap());
        return getMovieBriefs(searchUrl);
    }

    private List<MovieBrief> getMovieBriefs(String fullUrl) throws IllegalAccessException {
        SearchMovieDto pReturn = restClientFacade.get(fullUrl, null, SearchMovieDto.class);
        List<MovieBrief> movies = new ArrayList<>();
        pReturn.getResults().forEach((temp) -> {
            movies.add(new MovieBrief(temp.getId(), temp.getTitle(), temp.getVote_average(), temp.getRelease_date(), temp.getPoster_path()));
        });
        return movies;
    }

    public MovieDetailsDto getMovieDetails(Long id) throws IllegalAccessException {
        String movieDetailsUrl = getFullUrl(url, "/movie/" + id, getDefaultQueryMap());
        return restClientFacade.get(movieDetailsUrl, null, MovieDetailsDto.class);
    }

    public Map<String, String> getDefaultQueryMap() {
        if (defaultQueryMap == null) {
            defaultQueryMap = new HashMap<>();
            defaultQueryMap.put("api_key", this.key);
        }
        return defaultQueryMap;
    }

    public String getDefaultApiQueryString() {
        if (defaultQueryString == null) {
            defaultQueryString = mapToQueryString(getDefaultQueryMap());
        }
        return defaultQueryString;
    }
    @AllArgsConstructor
    static
    class SearchListQueryParams {
        public String query;
    }
}
