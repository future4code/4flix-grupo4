import { MovieGateway } from "../../../gateway/movieGateway"
import { Movie } from "../../entities/Movie"
import { MovieCreateUseCase, MovieCreateOutput, MovieCreateInput } from "./MovieCreateUseCase"

test('Create a movie', async () => {

    // Preparacao
    const movieGateway: MovieGateway = {
      movieCreate(movie: Movie): Promise<void> {
        return Promise.resolve()
      }
    }
  
    const useCase = new MovieCreateUseCase(movieGateway)
    const input: MovieCreateInput = {
        movie: {
            title: "Teste1",
            date: new Date(),
            length: "100 min",
            synopsis: "teste2",
            link: "teste3",
            picture: "teste4",
            id: "teste5"
        }
    }
  
    // Execucao
    const result = await useCase.execute(input)
  
    expect(result.message).toBe("Movie created successfully")
  
  })