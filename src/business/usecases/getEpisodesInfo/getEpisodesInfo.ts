import { GetEpisodeGateway } from "../../../gateway/getEpisodeGateway"
import { Serie } from "../../entities/Serie"
import { Movie } from "../../entities/Movie"



export class GetEpisodesInfo {

    constructor(
        private getEpisodeGateway: GetEpisodeGateway
    ){}

    async execute(GetByIdInput: GetEpisodeInput): Promise<GetEpisodeOutput> {
        const result: GetEpisodeOutput = await this.getEpisodeGateway.search(GetByIdInput.id)

        return result

    }
}

export interface GetEpisodeInput {
    id: string
}

export interface GetEpisodeOutput {
    id: string,
    title: string,
    picture: string,
    synopsis: string,
    length: string,
    link: string,
    seriesTitle: string,
    seriesId: string
}