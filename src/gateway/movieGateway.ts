import {Movie} from "../business/entities/Movie"

export interface MovieGateway {
  movieCreate(movie: Movie): Promise<void>
}