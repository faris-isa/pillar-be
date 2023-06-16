import {Model, Column, DataType, PrimaryKey, Table, CreatedAt, UpdatedAt, Unique, DeletedAt, HasMany} from "sequelize-typescript";
import { InventoryDetails } from "./inventory_details";
export { Inventory };

@Table({
    tableName: 'inventory',
    underscored: true,
    paranoid: true
})
class Inventory extends Model {
    @PrimaryKey
    @Unique
    @Column
    kode_barang!: string;

    @CreatedAt
    created_at!: Date;
  
    @UpdatedAt
    updated_at!: Date;
  
    @DeletedAt
    deleted_at!: Date;

    @HasMany(() => InventoryDetails, 'kode_barang')
    details!: InventoryDetails[];
}