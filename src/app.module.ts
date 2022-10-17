import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [CategoriaModule],
=======
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [ProdutosModule],
>>>>>>> aea2449c96b84eef2b7a0b3f4767dc81c7c85478
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
