import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [ProdutosModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
