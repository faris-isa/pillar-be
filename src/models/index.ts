import { Sequelize } from 'sequelize-typescript';

const config = require("../../config.json");
// const connection = new Sequelize(databases.prod.path, {
//   models: [Roles, Accounts, Providers, AccountProvider, Busses, BusDetails, BusProvider, BusMaintenance, AccountRole, Spareparts, SparepartParams, BusSparepart, BusSparepartDetail, LogMaintenance, LogSparepart]
// });
const connection = new Sequelize(config.databases.path, {
  models: []
});

export default connection;
