import { GetMovieByIdGateway } from "../../../gateway/getMovieByIdGateway"
import { GetMovieByIdUseCase, GetMovieByIdInput, GetMovieByIdOtput } from "./GetMovieByIdUseCase"
import { Movie } from "../../entities/Movie"

describe("Test for get movie by ID", () =>{
    it("Should return a movie ", async () =>{
        const date = new Date
        const getMovieByIdOtput: GetMovieByIdOtput = {
            result: {
                title: "Teste1",
                date: date,
                length: "100 min",
                synopsis: "teste2",
                link: "teste3",
                picture: "teste4",
                id: "teste5"
            }
        }

        const getMovieByIdGateway: GetMovieByIdGateway ={
            getMovieById: jest.fn().mockReturnValueOnce(new Movie("Teste1", date, "100 min", "teste2", "teste3", "teste4", "teste5"))
        }

        const getMovieByIdUseCase = new GetMovieByIdUseCase (getMovieByIdGateway)

        const getMovieByIdInput: GetMovieByIdInput = {
            movieId: "teste5"
        }

        

        const result = await getMovieByIdUseCase.execute(getMovieByIdInput)
        expect(result).toEqual(new Movie("Teste1", date, "100 min", "teste2", "teste3", "teste4", "teste5"))
    })
})