import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Produto 
{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column({length: 100})
    price: number

    @Column({length: 100})
    type: string
}