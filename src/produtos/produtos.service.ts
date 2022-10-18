import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {

  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produto>
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtosRepository.find();
  }

  async findById(id: number): Promise<Produto> {

    let produtos = await this.produtosRepository.findOne({

      where: {
        id
      }

    });

    if(!produtos) {

      throw new HttpException('Produtos não encontrado!', HttpStatus.NOT_FOUND);

    }

    return produtos; 
  }

  async findByName(nome: string): Promise<Produto[]> {

    return await this.produtosRepository.find({

      where:{

        nome: ILike(`%${nome}%`)

      }
    });

  }

  async create(createProdutosDto: CreateProdutoDto): Promise<CreateProdutoDto> {
    return this.produtosRepository.save(createProdutosDto);
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.produtosRepository.update(id, updateProdutoDto);
  }

  async delete(id: number): Promise<DeleteResult> {

    let buscaProdutos = await this.findById(id);

    if (!buscaProdutos) {
        throw new HttpException('predutos não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.produtosRepository.delete(id);
  }
}