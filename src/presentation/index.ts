import express, {Request, Response} from 'express'
import {createMovie} from "./movieCreater";


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/pedido', async (request: Request, response: Response) => {
    createMovie(request, response)
})

export default app