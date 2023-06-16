import fastify from "fastify";
import fs from "fs";

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

    app.get
    <{Params: {path: string}}>
    ("/static/:path", async (req, res)=>{
      const stream = fs.createReadStream("./static/" + req.params.path);
      stream.on("error", (error) => {
        console.error(`Error reading file: ${error}`);
        res.status(500).send("Internal Server Error");
      });
      return res.send(stream)
    })

    app.register(require("./controllers/auth"), { prefix: "/auth" })
    app.register(require("./controllers/inventory"), { prefix: "/inventory" })

    try {
        log.info(`listen to ${port}`)
        app.listen({
          port: port,
          host: '0.0.0.0'
        })
        con_sql.sync()
        // con_sql.sync({force: true})
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}





