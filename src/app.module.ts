import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnexoIController } from './simples-nacional/anexo-i/anexo-i.controller';
import { AnexoIService } from './simples-nacional/anexo-i/anexo-i.service';
import { AnexoIModule } from './simples-nacional/anexo-i/anexo-i.module';

@Module({
  imports: [AnexoIModule],
  controllers: [AppController, AnexoIController],
  providers: [AppService, AnexoIService],
})
export class AppModule {}
