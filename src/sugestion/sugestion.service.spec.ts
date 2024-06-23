import { Test, TestingModule } from '@nestjs/testing';
import { SugestionService } from './sugestion.service';

describe('SugestionService', () => {
  let service: SugestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SugestionService],
    }).compile();

    service = module.get<SugestionService>(SugestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
