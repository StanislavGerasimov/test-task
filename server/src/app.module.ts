import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Property } from './properties/property.entity';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'RealEstateDB',
      entities: [Property, User],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Property]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'cards'),
      serveRoot: '/cards',
      serveStaticOptions: {
        index: false,
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
