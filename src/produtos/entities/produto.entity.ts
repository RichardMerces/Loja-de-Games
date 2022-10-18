import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity({name: 'tb_produto'})
export class Produto 
{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    nome: string
    
    @Column({length: 100})
    type: string

    @Column({ type: "decimal" , precision: 10, scale: 2, default: 0})
    price: number
}