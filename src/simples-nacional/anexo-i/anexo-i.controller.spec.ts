import { Test, TestingModule } from '@nestjs/testing';
import { AnexoIController } from './anexo-i.controller';

describe('AnexoIController', () => {
  let controller: AnexoIController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnexoIController],
    }).compile();

    controller = module.get<AnexoIController>(AnexoIController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
