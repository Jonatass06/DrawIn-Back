import { Test, TestingModule } from '@nestjs/testing';
import { SugestionUserController } from './sugestion_user.controller';
import { SugestionUserService } from './sugestion_user.service';

describe('SugestionUserController', () => {
  let controller: SugestionUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SugestionUserController],
      providers: [SugestionUserService],
    }).compile();

    controller = module.get<SugestionUserController>(SugestionUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
