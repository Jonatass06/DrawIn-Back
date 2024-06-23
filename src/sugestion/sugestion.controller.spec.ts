import { Test, TestingModule } from '@nestjs/testing';
import { SugestionController } from './sugestion.controller';
import { SugestionService } from './sugestion.service';

describe('SugestionController', () => {
  let controller: SugestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SugestionController],
      providers: [SugestionService],
    }).compile();

    controller = module.get<SugestionController>(SugestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
