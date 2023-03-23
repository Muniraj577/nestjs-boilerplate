import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities:[],
  migrations: [],
}

const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize().then(() => {
  console.log('initialized')
}).catch((err) => {
  console.log(err);
});

export default dataSource;