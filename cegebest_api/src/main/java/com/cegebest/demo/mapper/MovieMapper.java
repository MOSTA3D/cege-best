package com.cegebest.demo.mapper;

import com.cegebest.demo.dto.MovieDetailsDto;
import com.cegebest.demo.model.Movie;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MovieMapper {
    MovieDetailsDto fromMovieToMovieDetailsDto(Movie movie);
    Movie fromMovieDetailsDtoToMovie(MovieDetailsDto movieDetailsDto);
}
