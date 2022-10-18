import { IsNumber, IsString } from "class-validator"

export class CreateProdutoDto {

    @IsString()
    nome: string;
    
    @IsString()
    type: string;
    
    @IsNumber()
    price: number;

}
