import{Entity,PrimaryGeneratedColumn,Column} from "typeorm";


@Entity({name: 'tb_categoria'})
export class Categoria {
    @PrimaryGeneratedColumn()
    id:number;

    @Column ({length:100})
    genero:string;

    @Column({length:100})
    classificacao:string;
   
    
    
}



