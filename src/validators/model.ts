import { wrap } from "./validatorWrapper";
export { wrap }

export const inventory = {
    type: "object",
    additionalProperties: false,
    properties: {
        kode_barang: {type: "string"},
        serial_number: {
            type: "array",
            items : {
                type: "object",
                properties: {
                    serial_number: {type: "string"}
                },
                required: ["serial_number"]
            }
        }
    },
    required: ["kode_barang", "serial_number"]
} as const;

export const inventoryDetail = {
    type: "object",
    additionalProperties: false,
    properties: {
        serial_number: {
            type: "array",
            items : {
                type: "object",
                properties: {
                    serial_number: {type: "string"}
                },
                required: ["serial_number"]
            }
        }
    },
    required: ["serial_number"]
} as const;