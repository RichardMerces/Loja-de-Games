import{Entity,PrimaryGeneratedColumn,Column} from "typeorm";


@Entity("")
export class Categoria {
    @PrimaryGeneratedColumn()
    id:number;
    @Column ({length:100})
    genero:string;
    @Column({length:100})
    classificacao:string;
   
    
    
}



