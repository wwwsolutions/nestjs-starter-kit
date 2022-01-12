import { Test } from '@nestjs/testing';
import { PrismaDataService } from './prisma-data.service';

describe('PrismaDataService', () => {
  let service: PrismaDataService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PrismaDataService],
    }).compile();

    service = module.get(PrismaDataService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
