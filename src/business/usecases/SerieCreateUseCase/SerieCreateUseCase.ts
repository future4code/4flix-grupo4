import { Episode, Serie } from '../../entities/Serie'
import { SerieGateway } from '../../../gateway/serieGateway';

export class SerieCreateUseCase {
    constructor(
        private serieGateway: SerieGateway,
    ) { }
    async execute(input: SerieCreateInput): Promise<SerieCreateOutput> {
        try {
            const serie = new Serie(input.serie.title, input.serie.date, input.serie.synopsis, input.serie.link, input.serie.picture, input.serie.id, input.serie.episodes)
            await this.serieGateway.serieCreate(serie)
            const message: string = "Serie created successfully"
            return { message }
        }

        catch (err) {
            return err
        }

    }

}

export interface SerieCreateInput {
    serie: {
        title: string,
        date: Date,
        synopsis: string,
        link: string,
        picture: string,
        id: string,
        episodes: Episode[]
    }
}

export interface SerieCreateOutput {
    message: string
}