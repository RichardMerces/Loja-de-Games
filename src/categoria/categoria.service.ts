import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {

  constructor (
    @Injectable("CATEGORIA_REPOSITORY")
    private categoriaRepository:Repository<categoria>){}
    async Listar():Promise<Categoria[]>{
      return this.categoriaRepository.find();
    }

    private produtos: Categoria[]=[]
    create(createCategoriaDto: CreateCategoriaDto) {
      const idMaxAtual = this.produtos[this.produtos.length -1]?. id || 0;
      const id = idMaxAtual + 1;
      const categoria = {
        id,
        ...createCategoriaDto
      };
      this.produtos.push(categoria)
      return categoria;
    }
  
    findAll() {
      return this.produtos;
    }
  
    findOne(id: number) {
       const index = this.produtos.findIndex((categoria)=> categoria.id===id)
        return this.produtos[index]
       // return `This action returns a #${id} user`;
      
    
    }
  
    update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
      const produtos= this.findOne(id)
      const newCategoria ={
        ...produtos ,
        ... updateCategoriaDto,
      }
        const index = this.produtos.findIndex((categoria) => categoria.id === id)
        this.produtos[index] = newCategoria
      
      return newCategoria;
    }
    
  
    remove(id: number) {
    const index = this.produtos.findIndex((categoria) => categoria.id === id)
  
    if (index === -1){
      throw new NotFoundException(`Usuário com o id ${id} não encontrado`) // excecao quando algo não for encontrado  em http
  
    }
    this.produtos.splice(index,1);
  }
  
  }