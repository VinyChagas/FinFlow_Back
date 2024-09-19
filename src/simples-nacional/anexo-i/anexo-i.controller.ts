import { Controller, Get, Query } from '@nestjs/common';
import { AnexoIService } from './anexo-i.service';

@Controller('simples-nacional/anexo-i')
export class AnexoIController {
  constructor(private readonly anexoIService: AnexoIService) {}

  @Get('calcular')
  calcularImposto(
    @Query('receitaBrutaAcumulada') receitaBrutaAcumulada: number
  ) {
    return this.anexoIService.calcularImposto(receitaBrutaAcumulada);
  }
}