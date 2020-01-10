import { Movie } from "../business/entities/Movie";

export interface GetMovieByIdGateway {
  getMovieById(movieID: string): Promise<Movie>
}