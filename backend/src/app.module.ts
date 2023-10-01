import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubModule } from './github/github.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [GithubModule, ConfigModule.forRoot({
    envFilePath: '.env.development',
  }), ConfigModule.forRoot({
    load: [configuration],
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
