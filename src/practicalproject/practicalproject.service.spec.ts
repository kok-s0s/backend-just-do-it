import { Test, TestingModule } from '@nestjs/testing';
import { PracticalprojectService } from './practicalproject.service';

describe('PracticalprojectService', () => {
  let service: PracticalprojectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PracticalprojectService],
    }).compile();

    service = module.get<PracticalprojectService>(PracticalprojectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
