import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: process.env.DB_NAME || "software_management",
  synchronize: false, 
  entities: [
    __dirname + '/src/**/*.entity{.ts,.js}'
  ],
  migrations: [
    __dirname + '/src/migrations/*{.ts,.js}'
  ],
};

const dataSource = new DataSource(config);
export default dataSource;
