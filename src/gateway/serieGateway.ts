import {Serie} from "../business/entities/Serie"

export interface SerieGateway {
  serieCreate(serie: Serie): Promise<void>
}