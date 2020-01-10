import knex from 'knex'
import {MovieGateway} from "../gateway/movieGateway";
import {Movie} from "../business/entities/Movie";

interface MovieModel {
        title: string,
        date: string,
        length: string,
        synopsis: string,
        link: string,
        picture: string,
        id: string
}

class MovieMapper {
    entityToModel(entity: Movie): MovieModel {
        return {
            id: entity.getId(),
            title: entity.getTitle(),
            date: entity.getDate(),
            length: entity.getLength(),
            synopsis: entity.getSynopsis(),
            link: entity.getLink(),
            picture: entity.getPicture(),
        }
    }
}


export class MovieDatabase implements MovieGateway {
    private connection: knex
    private MovieMapper: MovieMapper
    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'kelson',
                password: '6483227d93afd9fb3d5612f54085ed3b',
                database: 'kelson'
            }
        })

        this.MovieMapper = new MovieMapper()
    }


    async movieCreate(movie: Movie): Promise<void> {
        await this.connection('Movie').insert(this.MovieMapper.entityToModel(movie))
    }
}