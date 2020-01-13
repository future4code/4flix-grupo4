import { Movie } from "../../entities/Movie"
import { GetMovieByIdGateway } from "../../../gateway/getMovieByIdGateway"


export class GetMovieByIdUseCase {
    constructor(
        private getMovieByIdGateway: GetMovieByIdGateway
    ) { }

    async execute(getMovieByIdInput: GetMovieByIdInput): Promise<GetMovieByIdOtput> {
        const movie: Movie = await this.getMovieByIdGateway.getMovieById(getMovieByIdInput.movieId)

        return {
            result: {
                id: movie.getId(),
                title: movie.getTitle(),
                date: movie.getDate(),
                length: movie.getLenth(),
                synopsis: movie.getSynopsis(),
                link: movie.getLink(),
                picture: movie.getPicture(),

            }
        }
    }
}

export interface GetMovieByIdInput {
    movieId: string
}

export interface GetMovieByIdOtput {
    result: {
        id: string,
        title: string,
        date: Date,
        length: string,
        synopsis: string,
        link: string,
        picture: string
    }
}