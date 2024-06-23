import { Test, TestingModule } from '@nestjs/testing';
import { SugestionUserService } from './sugestion_user.service';

describe('SugestionUserService', () => {
  let service: SugestionUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SugestionUserService],
    }).compile();

    service = module.get<SugestionUserService>(SugestionUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
