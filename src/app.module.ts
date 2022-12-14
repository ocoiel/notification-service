import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './infra/app.controller';
import { PrismaService } from './infra/primsa.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
