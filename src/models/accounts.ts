import {Model, Column, DataType, PrimaryKey, Table, CreatedAt, UpdatedAt, Unique, DeletedAt} from "sequelize-typescript";
export { Accounts };

@Table({
    tableName: 'accounts',
    underscored: true,
    paranoid: true
})
class Accounts extends Model {
    @PrimaryKey
    @Column(DataType.UUID)
    id!: string;

    @Unique
    @Column
    username!: string;

    @Column
    password!: string;
    
    @Column
    is_admin!: boolean;

    @CreatedAt
    created_at!: Date;
  
    @UpdatedAt
    updated_at!: Date;
  
    @DeletedAt
    deleted_at!: Date;
}