package com.cegebest.demo.service;

import java.util.*;

import com.cegebest.demo.dto.MovieDetailsDto;
import com.cegebest.demo.dto.SearchMovieDto;
import com.cegebest.demo.mapper.MovieMapper;
import com.cegebest.demo.model.Movie;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cegebest.demo.facade.RestClientFacade;
import com.cegebest.demo.repository.MovieRepo;
import com.cegebest.demo.dto.MovieBrief;

import static com.cegebest.demo.utils.Common.getFullUrl;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final String url = "https://api.themoviedb.org/3";
    private final String key = "a97243d7813d31446f6c43284e6854d5";
    private String defaultQueryString;
    private Map<String, String> defaultQueryMap;

    private final RestClientFacade restClientFacade;
    private final MovieRepo movieRepo;
    private final MovieMapper movieMapper;

    public List<MovieBrief> getPopularMovies(int page) {
        Map<String, String> popularMovieQueryMap = new HashMap<>(getDefaultQueryMap());
        popularMovieQueryMap.put("page", String.valueOf(page));
        String popularMovieUrl = getFullUrl(url, "/movie/popular", popularMovieQueryMap);
        return getMovieBriefs(popularMovieUrl);
    }

    public List<MovieBrief> getSearchList(String query) {
        Map<String, String> searchQueryMap = new HashMap<>(getDefaultQueryMap());
        searchQueryMap.put("query", query);
        String searchUrl = getFullUrl(url, "/search/movie", searchQueryMap);
        return getMovieBriefs(searchUrl);
    }

    private List<MovieBrief> getMovieBriefs(String fullUrl) {
        SearchMovieDto pReturn = restClientFacade.get(fullUrl, null, SearchMovieDto.class);
        List<MovieBrief> movies = new ArrayList<>();
        pReturn.getResults().forEach((temp) -> {
            movies.add(new MovieBrief(temp.getId(), temp.getTitle(), temp.getVote_average(), temp.getRelease_date(), temp.getPoster_path()));
        });
        return movies;
    }

    public Movie getMovieDetails(Long id) {
        Optional<Movie> movieOptional = movieRepo.findById(id);
        if(movieOptional.isPresent())
            return movieOptional.get();
        String movieDetailsUrl = getFullUrl(url, "/movie/" + id, getDefaultQueryMap());
        MovieDetailsDto movieDetailsDto = restClientFacade.get(movieDetailsUrl, null, MovieDetailsDto.class);
        Movie movie = movieMapper.fromMovieDetailsDtoToMovie(movieDetailsDto);
        movieRepo.save(movie);
        return movie;
    }

    public Map<String, String> getDefaultQueryMap() {
        if (defaultQueryMap == null) {
            defaultQueryMap = new HashMap<>();
            defaultQueryMap.put("api_key", this.key);
        }
        return defaultQueryMap;
    }

    @AllArgsConstructor
    static
    class SearchListQueryParams {
        public String query;
    }
}
