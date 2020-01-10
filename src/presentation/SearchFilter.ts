import {Request, Response} from 'express'
import {SearchFilterUseCase, SearchInput} from "../business/usecases/SearchFilterUseCase/SearchFilterUseCase";

export async function searchFilter(req: Request, res: Response) {
    try {
        const getEpisodeInput: SearchInput = {
            query: req.params.query,
            minLength: req.params.minLength,
            maxLength: req.params.maxLength
        }

        const useCase = new SearchFilterUseCase()

        const result = await useCase.execute(getEpisodeInput)

        res.send({...result})
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}