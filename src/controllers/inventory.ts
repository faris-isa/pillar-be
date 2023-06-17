import { FastifyInstance } from "fastify";
import { login, wrap} from "../validators/auth"
const { v4: uuidv4 } = require('uuid');

import { FromSchema } from "json-schema-to-ts";
import { Inventory } from "../models/inventory";
import { Op } from "sequelize";
import { inventory, inventoryDetail, outItem } from "../validators/model";
import { InventoryDetails } from "../models/inventory_details";

module.exports = async (app: FastifyInstance) => {
    app.get("/", async (req, res)=>{
        let allInventory: Inventory[] = await Inventory.findAll({
            where: {
                "deleted_at": null,
            }
        })
        res.format(allInventory);
    })

    app.get("/detail", async (req, res)=>{
        let allInventory: Inventory[] = await Inventory.findAll({
            where: {
                "deleted_at": null
            },
            include: [{
                model: InventoryDetails,
                where: {
                    "out_date": null,
                },
                required: false
            }]
        })
        res.format(allInventory);
    })

    app.post<{Body: FromSchema<typeof inventory>}>
    ("/", wrap(inventory),async (req, res)=>{
        const inv = await Inventory.create({
            kode_barang: req.body.kode_barang
        })
        const detailsAdded: InventoryDetails[] = [];
        if(inv){
            const serial_number = req.body.serial_number;
            if(serial_number.length > 0){
                for (let i = 0; i < serial_number.length; i++) {
                    const element = serial_number[i];
                    const details = await InventoryDetails.create({
                        id: uuidv4(),
                        kode_barang: inv.kode_barang,
                        serial_number: element.serial_number
                    })
                    detailsAdded.push(details)
                }
            }
        }
        res.format({inv, detailsAdded})
    })

    app.post<{Params: {kd: string}, Body: FromSchema<typeof inventoryDetail>}>
    ("/serial/:kd", wrap(inventoryDetail), async (req, res)=>{
        const kd = req.params.kd;
        let allInventory: any = await Inventory.findOne({
            where: {
                "kode_barang": kd,
            }
        })
        if(!allInventory) return res.format([], 404, "Not Found", "Not Found")
        const arrSerial = req.body.serial_number;
        const detailsAdded: InventoryDetails[] = [];
        for (let i = 0; i < arrSerial.length; i++) {
            const element = arrSerial[i];
            const details = await InventoryDetails.create({
                id: uuidv4(),
                kode_barang: kd,
                serial_number: element.serial_number
            })
            detailsAdded.push(details)
        }
        res.format({detailsAdded})
    })

    app.post<{Body: FromSchema<typeof outItem>}>
    ("/fifo", wrap(outItem),async (req, res)=>{
        const searchFirst = await InventoryDetails.findOne({
            where: {
                "kode_barang": req.body.kode_barang,
            },
            order: [
                ['created_at', 'ASC']
            ],
            limit: 1
        })
        if(!searchFirst) return res.format([], 404, "Not Found", "Not Found")
        searchFirst.update({
            "out_date" : Date.now()
        })
        res.format(searchFirst)

    })

}