import {Request, Response} from 'express'
import {MovieCreateInput, MovieCreateUseCase} from "../business/usecases/MovieCreateUseCase/MovieCreateUseCase";
import {MovieDatabase} from "../data/createMovie";

export async function createMovie(req: Request, res: Response) {
    try {
        const CreateMovie: MovieCreateInput = {
            movie: {
                title: req.params.title,
                date: req.params.date,
                length: req.params.length,
                synopsis: req.params.synopsis,
                link: req.params.link,
                picture: req.params.picture,
                id: req.params.userId
            }
        }

        const gateway = new MovieDatabase()

        const useCase = new MovieCreateUseCase(gateway)

        const result = await useCase.execute(CreateMovie)

        res.send({...result})
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}