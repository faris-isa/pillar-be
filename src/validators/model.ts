import { wrap } from "./validatorWrapper";
export { wrap }

export const account = {
    type: "object",
    additionalProperties: false,
    properties: {
        username: {type: "string"},
        password: {type: "string"},
        is_active: {type: "string"},
        roles: {
            type: "object",
            additionalProperties: false,
            properties: {
                name: {type: "string"},
                is_active: {stype: "string"}
            },
            required: ['name', 'is_active']
        }
    },
    required: ["username", "password"]
} as const;