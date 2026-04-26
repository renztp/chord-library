import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5431,
        username: 'postgres',
        password: 'postgres',
        database: 'chord_library_db',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      try {
        if (!dataSource.isInitialized) {
          await dataSource.initialize();
        }
      } catch (error) {
        console.error(error);
      }
      return dataSource;
    },
  },
];

