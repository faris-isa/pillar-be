import { FastifyInstance } from "fastify";
import { login, wrap} from "../validators/auth"
import {createHmac} from "crypto"

import { FromSchema } from "json-schema-to-ts";

import { secretKey } from "../../config.json";
import { Accounts } from "../models/accounts";

module.exports = async (app: FastifyInstance) => {
    app.post<{Body: FromSchema<typeof login>}>
    ("/login", wrap(login), async (req, res)=>{
        let password = createHmac("sha256", secretKey).update(req.body.password).digest("hex")
        const data: any = await Accounts.findOne({ where: { username: req.body.username, password: password }})
        .catch(() => {
            return null
        });
        if(!data) return res.format([], 401, "Unauthorized", "Invalid credentials")
        if(data.deleted_at !== null) return res.format([], 403, "Forbidden", "Account Deleted")
        let token = await app.jwt.sign({id: data.id, exp : Date.now() + 3_600_000})
        let redirect: string = '/app';
        res.setCookie("token", token, {
            path: "/"
        }).format({token, redirect})
    })

    app.get("/check", async (req, res)=>{
        res.format(req.account)
    });

}