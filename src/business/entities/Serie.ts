import { Episode } from "./Episode";

export class Serie {
    
    constructor(
        private title: string,
        private date: Date,
        private synopsis: string,
        private link: string,
        private picture: string,
        private id: string,
        private episodes: Episode[]
    ){}

    
}

