import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { ChordModule } from './chord/chord.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), CategoryModule, ChordModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
