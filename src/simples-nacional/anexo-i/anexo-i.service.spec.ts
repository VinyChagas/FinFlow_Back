import { Test, TestingModule } from '@nestjs/testing';
import { AnexoIService } from './anexo-i.service';

describe('AnexoIService', () => {
  let service: AnexoIService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnexoIService],
    }).compile();

    service = module.get<AnexoIService>(AnexoIService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
