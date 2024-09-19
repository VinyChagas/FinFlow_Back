import { Injectable } from '@nestjs/common';

interface FaixaICMS {
    min: number;
    max: number;
}
  
interface AjusteICMS {
    faixa: FaixaICMS;
    percentualICMS: number;
    ajuste: number;
    percentualNovo: number;
}
  
@Injectable()
export class AnexoIService {
  private: AjusteICMS[] = [
    { faixa: { min: 0, max: 100000 }, percentualICMS: 0, ajuste: 0, percentualNovo: 0 },
    { faixa: { min: 100000.01, max: 360000 }, percentualICMS: 0, ajuste: 0, percentualNovo: 0 },
    { faixa: { min: 360000.01, max: 540000 }, percentualICMS: 0.67, ajuste: 0.13, percentualNovo: 0.8 },
    { faixa: { min: 540000.01, max: 720000 }, percentualICMS: 1.07, ajuste: 0.21, percentualNovo: 1.28 },
    { faixa: { min: 720000.01, max: 1080000 }, percentualICMS: 1.33, ajuste: 0.27, percentualNovo: 1.60 },
    { faixa: { min: 1080000.01, max: 1260000 }, percentualICMS: 1.62, ajuste: 0.32, percentualNovo: 1.94 },
    { faixa: { min: 1260000.01, max: 1440000 }, percentualICMS: 2.07, ajuste: 0.41, percentualNovo: 2.48 },
    { faixa: { min: 1440000.01, max: 1620000 }, percentualICMS: 2.27, ajuste: 0.45, percentualNovo: 2.72 },
    { faixa: { min: 1620000.01, max: 1800000 }, percentualICMS: 2.42, ajuste: 0.48, percentualNovo: 2.90 },
    { faixa: { min: 1800000.01, max: 1980000 }, percentualICMS: 2.56, ajuste: 0.51, percentualNovo: 3.07 },
    { faixa: { min: 1980000.01, max: 2160000 }, percentualICMS: 2.67, ajuste: 0.53, percentualNovo: 3.20 },
    { faixa: { min: 2160000.01, max: 2340000 }, percentualICMS: 2.76, ajuste: 0.55, percentualNovo: 3.31 },
    { faixa: { min: 2340000.01, max: 2520000 }, percentualICMS: 2.84, ajuste: 0.57, percentualNovo: 3.41 },
    { faixa: { min: 2520000.01, max: 2700000 }, percentualICMS: 2.92, ajuste: 0.58, percentualNovo: 3.50 },
    { faixa: { min: 2700000.01, max: 2880000 }, percentualICMS: 3.06, ajuste: 0.61, percentualNovo: 3.67 },
    { faixa: { min: 2880000.01, max: 3060000 }, percentualICMS: 3.19, ajuste: 0.64, percentualNovo: 3.83 },
    { faixa: { min: 3060000.01, max: 3240000 }, percentualICMS: 3.30, ajuste: 0.66, percentualNovo: 3.96 },
    { faixa: { min: 3240000.01, max: 3420000 }, percentualICMS: 3.40, ajuste: 0.68, percentualNovo: 4.08 },
    { faixa: { min: 3420000.01, max: 3600000 }, percentualICMS: 3.50, ajuste: 0.70, percentualNovo: 4.20 },
  ];

  calcularImposto(receitaBrutaAcumulada: number): { aliquota: number, valorDeducao: number, imposto: number } {
    // 1. Definir as faixas de faturamento, alíquotas e valores a deduzir
    const faixas = [
      { min: 0, max: 180000, aliquota: 4.0, valorDeducao: 0 },
      { min: 180000.01, max: 360000, aliquota: 7.3, valorDeducao: 5940 },
      { min: 360000.01, max: 720000, aliquota: 9.5, valorDeducao: 13860 },
      { min: 720000.01, max: 1800000, aliquota: 10.7, valorDeducao: 22500 },
      { min: 1800000.01, max: 3600000, aliquota: 14.3, valorDeducao: 87300 },
      { min: 3600000.01, max: 4800000, aliquota: 19.0, valorDeducao: 378000 },
    ];

    // 2. Encontrar a faixa de faturamento correspondente
    const faixa = faixas.find(f => receitaBrutaAcumulada >= f.min && receitaBrutaAcumulada <= f.max);

    if (!faixa) {
      throw new Error('Receita bruta acumulada fora das faixas permitidas.'); 
    }

    // 3. Calcular o imposto (convertendo a alíquota para decimal)
    const aliquotaDecimal = faixa.aliquota / 100; 
    const imposto = (receitaBrutaAcumulada * aliquotaDecimal) - faixa.valorDeducao;

    return { 
      aliquota: faixa.aliquota, // Mantemos a alíquota em porcentagem para exibição
      valorDeducao: faixa.valorDeducao, 
      imposto 
    };
  }
}
