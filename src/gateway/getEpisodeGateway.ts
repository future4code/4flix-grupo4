import {GetEpisodeOutput} from "../business/usecases/getEpisodesInfo/getEpisodesInfo";

export interface GetEpisodeGateway{
    search(id: string): GetEpisodeOutput
}