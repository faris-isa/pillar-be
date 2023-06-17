import {Model, Column, Table, CreatedAt, UpdatedAt, Unique, DeletedAt, ForeignKey, BelongsTo, PrimaryKey, DataType} from "sequelize-typescript";
import { Inventory } from "./inventory";

@Table({
    tableName: 'inventory_details',
    underscored: true,
    timestamps: true
})
export class InventoryDetails extends Model {
    @PrimaryKey
    @Column(DataType.UUID)
    id!: string;
    
    @ForeignKey(() => Inventory)
    @Column
    kode_barang!: string;

    @Unique
    @Column
    serial_number!: string;

    @CreatedAt
    created_at!: Date;
  
    @UpdatedAt
    updated_at!: Date;
  
    @DeletedAt
    deleted_at!: Date;

    @Column
    out_date!: Date;

    @BelongsTo(() => Inventory, 'kode_barang')
    barang!: Inventory;
}