import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Produto 
{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    nome: string
    
    @Column({length: 100})
    type: string

    @Column({length: 100})
    price: number
}