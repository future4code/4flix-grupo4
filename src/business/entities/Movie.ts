export class Movie {
    
    constructor(
        private title: string,
        private date: Date,
        private length: string,
        private synopsis: string,
        private link: string,
        private picture: string,
        private id: string
    ){}
        public getId(): string{
            return this.id
        }

        public getTitle(): string{
            return this.title
        }

        public getDate(): Date{
            return this.date
        }

        public getLenth(): string{
            return this.length
        }

        public getSynopsis(): string{
            return this.synopsis
        }

        public getLink(): string{
            return this.link
        }

        public getPicture(): string{
            return this.picture
        }

        
}

