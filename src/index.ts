import "reflect-metadata";
import { createConnection, Column } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from './routes'

const app = express()

createConnection()
    .then(() => console.log("Tudo certo"))
    .catch((error) => console.log("erro ao conectar ao banco de dados: " + error))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(3333, () => {
    console.log("Servidor rodando em http://localhost:3333")
})