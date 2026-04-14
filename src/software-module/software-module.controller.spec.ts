import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareModuleController } from './software-module.controller';
import { SoftwareModuleService } from './software-module.service';

describe('SoftwareModuleController', () => {
  let controller: SoftwareModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftwareModuleController],
      providers: [SoftwareModuleService],
    }).compile();

    controller = module.get<SoftwareModuleController>(SoftwareModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
