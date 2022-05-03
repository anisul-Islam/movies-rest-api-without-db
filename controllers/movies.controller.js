import { dummyMovies } from "../models/movies.model.js";
import { v4 as uuidv4 } from "uuid";

let movies = dummyMovies;

export const getAllMovies = (req, res) => {
  res.status(200).json(movies);
};

export const findOneMovie = (req, res) => {
  const { id } = req.params;
  const filteredMovie = movies.filter((movie) => movie.id === id);
  res.status(200).json(filteredMovie);
};

export const addMovie = (req, res) => {
  const { title, rating, year, desc } = req.body;
  movies.push({
    id: uuidv4(),
    title,
    rating,
    year,
    desc,
  });
  res.status(201).json(movies);
};

export const updateMovie = (req, res) => {
  const { id } = req.params;
  const { title, rating, year, desc } = req.body;
  movies
    .filter((movie) => movie.id === id)
    .map((selectedMovie) => {
      (selectedMovie.title = title),
        (selectedMovie.rating = rating),
        (selectedMovie.year = year),
        (selectedMovie.desc = desc);
    });
  res.status(200).json(movies);
};

export const deleteMovie = (req, res) => {
  const { id } = req.params;
  const filteredMovies = movies.filter((movie) => movie.id !== id);
  movies = filteredMovies;
  res.status(200).json(movies);
};
