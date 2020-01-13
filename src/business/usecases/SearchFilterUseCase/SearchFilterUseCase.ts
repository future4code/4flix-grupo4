import { SearchGateway } from "../../../gateway/searchGateway"
import { Serie } from "../../entities/Serie"
import { Movie } from "../../entities/Movie"


export class SearchFilterUseCase {
  
  constructor(
    private searchGateway: SearchGateway
  ){}

  async execute(SearchInput: SearchInput): Promise<SearchOutput> {
    const result: Array<Movie | Serie> = await this.searchGateway.search(SearchInput.query, SearchInput.minLength, SearchInput.maxLength)

    return {result}

  }
}

export interface SearchInput {
  query: string,
  minLength: string,
  maxLength: string
}

export interface SearchOutput {
  result: Array<Movie | Serie>
}