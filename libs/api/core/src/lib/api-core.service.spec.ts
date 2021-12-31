import { Test } from '@nestjs/testing';
import { ApiCoreService } from './api-core.service';

describe('ApiCoreService', () => {
  let service: ApiCoreService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCoreService],
    }).compile();

    service = module.get(ApiCoreService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
