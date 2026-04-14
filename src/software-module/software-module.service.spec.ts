import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareModuleService } from './software-module.service';

describe('SoftwareModuleService', () => {
  let service: SoftwareModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftwareModuleService],
    }).compile();

    service = module.get<SoftwareModuleService>(SoftwareModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
