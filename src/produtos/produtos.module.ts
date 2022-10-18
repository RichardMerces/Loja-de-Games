import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { produtosController } from './produtos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { produtoProviders } from './produto.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [produtosController],
  providers: [
    ...produtoProviders,
    ProdutosService,]
})
export class ProdutosModule {}
