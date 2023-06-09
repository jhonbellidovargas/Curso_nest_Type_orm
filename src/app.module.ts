import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
// import { Client } from 'pg';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { environments } from './enviroments';
import config from './config';

// const client = new Client({
//   user: 'root',
//   host: 'localhost',
//   database: 'postgres',
//   password: '123456',
//   port: 5432,
// });

// client.connect();
// client.query('SELECT * FROM tasks', (err, res) => {
//   console.error(err);
//   console.log(res.rows);
// });

@Module({
  imports: [
    HttpModule,
    UsersModule,
    ProductsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        //NODE_ENV: Joi.string().valid('dev', 'stag', 'prod').default('dev'),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        API_KEY: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: 'TASKS',
    //   useFactory: async (http: HttpService) => {
    //     const tasks = await http
    //       .get('https://jsonplaceholder.typicode.com/todos')
    //       .toPromise();
    //     return tasks.data;
    //   },
    //   inject: [HttpService],
    // },
  ],
})
export class AppModule {}
