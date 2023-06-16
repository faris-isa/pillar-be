import fastify from "fastify";

import fastifyAuth from "@fastify/auth"
import cors from "@fastify/cors"
import fastifyJwt from "@fastify/jwt"
import fastifyCookie from "@fastify/cookie"

import con_sql from "./models/index";

import pino from "pino"

import { corsList, secretKey } from "../config.json";

const log = pino({level: "info"})

const port = 5000

export default async function start(){ 
    const app = fastify({
        logger : true,  
    })

    app.register(cors, {
        origin: corsList,
        credentials: true
    })

    app.register(fastifyCookie, {
        secret: secretKey,
        hook: "onRequest",
        parseOptions: {}
    })

    app.register(require("./libraries/helper"));

    app.register(fastifyJwt, {
        secret: secretKey
    })
    
    app.register(fastifyAuth).after(()=>{
        app.addHook("preHandler", app.auth([app.authToken]))
    })

    app.register(require("./controllers/auth"), { prefix: "/auth" })

    try {
        log.info(`listen to ${port}`)
        app.listen({
          port: port,
          host: '0.0.0.0'
        })
        con_sql.sync()
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}





