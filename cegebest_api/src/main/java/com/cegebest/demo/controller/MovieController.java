package com.cegebest.demo.controller;

import java.util.List;

import com.cegebest.demo.dto.MovieDetailsDto;
import com.cegebest.demo.mapper.MovieMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cegebest.demo.dto.MovieBrief;
import com.cegebest.demo.service.MovieService;

@RequiredArgsConstructor
@RestController
@RequestMapping("/movies")
public class MovieController {
    private final MovieService movieService;
    private final MovieMapper movieMapper;

    @GetMapping(path = "/popular", produces = {
        MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity<List<MovieBrief>> getPopularMovies(@RequestParam int page) {
        List<MovieBrief> movies = movieService.getPopularMovies(page);
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<MovieBrief>> getSearchMovies(@RequestParam String query) {
        List<MovieBrief> movies = movieService.getSearchList(query);
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovieDetailsDto> getMovieDetails(@PathVariable Long id) {
        MovieDetailsDto movieDetails = movieMapper.fromMovieToMovieDetailsDto(
            movieService.getMovieDetails(id)
        );
        return new ResponseEntity<>(movieDetails, HttpStatus.OK);
    }
}
