import { Module } from '@nestjs/common';
// import { User } from './user/user.entity';
import { UserModule } from './user/user.module'; // Ajoutez cette ligne
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'firstProject',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule, // Ajoutez cette ligne
  ],
})
export class AppModule {}
