import { IsString } from "class-validator";
import { PrimaryColumn} from "typeorm";

export class CreateCategoriaDto {

   @IsString()
   id:number;
   @IsString()
   genero:string;
   @IsString()
   classificacao: string;
   

}
