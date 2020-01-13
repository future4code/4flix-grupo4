import { SerieGateway } from "../../../gateway/serieGateway"
import { Serie } from "../../entities/Serie"
import { SerieCreateUseCase, SerieCreateInput } from "./SerieCreateUseCase"


test('Create a movie', async () => {

    // Preparacao
    const serieGateway: SerieGateway = {
        serieCreate(serie: Serie): Promise<void> {
            return Promise.resolve()
        }
    }

    const useCase = new SerieCreateUseCase(serieGateway)
    const input: SerieCreateInput = {
        serie: {
            title: "Teste1",
            date: new Date(),
            synopsis: "teste2",
            link: "teste3",
            picture: "teste4",
            id: "teste5",
            episodes: [{
                title: "Teste1",
                length: "100 min",
                synopsis: "teste2",
                link: "teste3",
                picture: "teste4",
            }]
        }
    }

    // Execucao
    const result = await useCase.execute(input)

    expect(result.message).toBe("Serie created successfully")

})