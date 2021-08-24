export class Quotes {
    upvotes: number
    downvotes: number
    score: number
    constructor(
        public date: Date,
    ) {
        this.upvotes = 0
        this.downvotes = 0
        this.score = 0
    }
}
