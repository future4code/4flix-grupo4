import { Movie } from "../../entities/Movie";
import { MovieGateway } from "../../../gateway/movieGateway";

export class MovieCreateUseCase {

    constructor(
        private movieGateway: MovieGateway,
    ) { }

    async execute(input: MovieCreateInput): Promise<MovieCreateOutput> {
        try {
            const movie = new Movie(input.movie.title, input.movie.date, input.movie.length, input.movie.synopsis, input.movie.link, input.movie.picture, input.movie.id)
            await this.movieGateway.movieCreate(movie)
            const message: string = "Movie created successfully"
            return { message }
        }

        catch (err) {
            return err
        }

    }
}

export interface MovieCreateInput {
    movie: {
        title: string,
        date: Date,
        length: string,
        synopsis: string,
        link: string,
        picture: string,
        id: string
    }
}

export interface MovieCreateOutput {
    message: string
}