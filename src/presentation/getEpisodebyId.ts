import {Request, Response} from 'express'
import {GetEpisodeInput, GetEpisodesInfo} from "../business/usecases/getEpisodesInfo/getEpisodesInfo";

export async function getEpisodeByIdEndpoint(req: Request, res: Response) {
    try {
        const getEpisodeInput: GetEpisodeInput = {
            id: req.params.userId
        }

        const useCase = new GetEpisodesInfo()

        const result = await useCase.execute(getEpisodeInput)

        res.send({...result})
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}