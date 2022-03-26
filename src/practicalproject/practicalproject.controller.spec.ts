import { Test, TestingModule } from '@nestjs/testing';
import { PracticalprojectController } from './practicalproject.controller';

describe('PracticalprojectController', () => {
  let controller: PracticalprojectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PracticalprojectController],
    }).compile();

    controller = module.get<PracticalprojectController>(
      PracticalprojectController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
