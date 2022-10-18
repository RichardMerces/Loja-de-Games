import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, ParseIntPipe } from '@nestjs/common';
import { produtosService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { produtos } from './entities/categoria.entity';

@Controller('produtos')
export class produtosController {
  constructor(private readonly produtosService: produtosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<produtos[]>{
    return this.produtosService.findAll()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<produtos> {
    return this.produtosService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  async findByName(@Param('nome') nome: string): Promise<produtos[]> {
    return this.produtosService.findByName(nome);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProdutosDto: CreateProdutosDto) {
    return this.produtosService.create(createProdutosDto);
  }

  @Patch('/atualizar/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number, @Body() updateProdutosDto: updateProdutosDto) {
    return this.produtosService.update(id, updateProdutosDto);
  }


  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.delete(id);
  }
}