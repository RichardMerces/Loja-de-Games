import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateProdutosDto } from './dto/create-categoria.dto';
import { UpdateProdutosDto } from './dto/update-categoria.dto';
import { produtos } from './entities/categoria.entity';

@Injectable()
export class ProdutosService {

  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produtos>
  ) {}

  async findAll(): Promise<Produtos[]> {
    return await this.produtosRepository.find();
  }

  async findById(idProdutos: number): Promise<Produtos> {

    let produtos = await this.produtosRepository.findOne({

      where: {
        idProdutos
      }

    });

    if(!produtos) {

      throw new HttpException('Produtos não encontrado!', HttpStatus.NOT_FOUND);

    }

    return produtos; 
  }

  async findByName(nome: string): Promise<Produtos[]> {

    return await this.produtosRepository.find({

      where:{

        nome: ILike(%${nome}%)

      }
    });

  }

  async create(createProdutosDto: CreateProdutosDto): Promise<CreateProdutosDto> {
    return this.produtosRepository.save(createProdutosDto);
  }

  async update(id: number, updateProdutosDto: UpdateProdutosDto) {
    return this.produtosRepository.update(id, updateProdutosDto);
  }

  async delete(id: number): Promise<DeleteResult> {

    let buscaProdutos = await this.findById(id);

    if (!buscaProdutos) {
        throw new HttpException('predutos não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.produtosRepository.delete(id);
  }
}