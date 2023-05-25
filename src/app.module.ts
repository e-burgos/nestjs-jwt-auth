import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    BooksModule,
    MongooseModule.forRoot(
      //'mongodb+srv://leduc1901:melody19@kylecluster.abjzu.mongodb.net/?retryWrites=true&w=majority',
      'mongodb+srv://eburgos:Esteban9414@cluster0.zzwjwkr.mongodb.net/',
    ),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
