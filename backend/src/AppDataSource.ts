import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  entities: ["src/entities/*.ts"],
  synchronize: true,
  logging: true,
});

export default AppDataSource;
