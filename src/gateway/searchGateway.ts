import { Movie } from "../business/entities/Movie";
import { Serie } from "../business/entities/Serie";

export interface SearchGateway {
  search(query: string, minLength: string, maxLength: string): Promise<Movie[] | Serie[]>
}