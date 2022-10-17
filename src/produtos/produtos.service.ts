/* import { Injectable, Inject } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { create } from 'domain';
import { ILike, Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {

  constructor(
    @Inject('PRODUTOS_REPOSITORY'){
    private produtosRepository: Repository<Produto>
    ){}

  
  findAll(): Promise<Produto[]>{
    return await this.produtosRepository.find();
  }

  findById(idProduto: number): Promise<Produto>{

    let produto = await this.produtosRepository.findOne({

      where: {
        idProduto
      }

    });

    return produto;
  }

  create(CreateProdutoDto: CreateProdutoDto): Promise<CreateProdutoDto> { 
    return this.produtosRepository.save(CreateProdutoDto);
  }

  update(id: number, UpdateProdutoDto: UpdateProdutoDto) {
      return this.produtosRepository.update(id, UpdateProdutoDto);
}

  delete (id: number): Promise<DeleteResult> {

    let buscarProdutos = await this.findById(id);
    
    if (!buscarProutos) {
    throw new HttpException('produtos não encontrado!', HttpStatus.NOT_FOUND)
    }
    return await this.produtosRepository.delete(id);
  }
}
 */