import { Sequelize } from 'sequelize-typescript';
import { Accounts } from './accounts';
import { Inventory } from './inventory';
import { InventoryDetails } from './inventory_details';
import { databases } from "../../config.json";

const connection = new Sequelize(databases.path, {
  models: [Accounts, Inventory, InventoryDetails]
});

export default connection;
