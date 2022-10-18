import { DataSource } from "typeorm";
import{Categoria} from './entities/categoria.entity';


export const categoriaProviders = [
    {
      provide: 'CATEGORIAS_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.
      getRepository(Categoria),
      inject: ['DATA_SOURCE'],
    },
  ];

  // testando um commit