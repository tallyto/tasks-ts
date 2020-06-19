import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from './routes'
 


const app = express()
createConnection()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(routes)

app.listen(3001, ()=>{
    console.log("Servidor rodando em http://localhost:3333")
})