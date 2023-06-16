import {wrap} from "./validatorWrapper";
export {wrap}

export const login = {
    type: "object",
    additionalProperties: false,
    properties: {
        username: {type: "string"},
        password: {type: "string"}
    },
    required: ["username", "password"]
} as const;