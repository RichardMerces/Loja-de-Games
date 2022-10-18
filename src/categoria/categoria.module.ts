import { Module } from '@nestjs/common';
import { CategoriasService } from './categoria.service';
import { CategoriasController } from './categoria.controller';
import { DatabaseModule } from 'src/database/database.module';
import { categoriaProviders } from './categoria.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [CategoriasController],
  providers: [
    ...categoriaProviders,
    CategoriasService,]
})
export class CategoriaModule {}
