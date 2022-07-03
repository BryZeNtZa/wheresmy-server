import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.GEO_DATABASE,
  synchronize: true, //synchronize: true shouldn't be used in production - otherwise you can lose production data.
  logging: true,
  name: 'wheresmy',
  host: process.env.MYSQL_HOST,
  entities: [__dirname + '/entities/*{.js,.ts}'],
};
