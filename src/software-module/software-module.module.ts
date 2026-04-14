import { Module } from '@nestjs/common';
import { SoftwareModuleService } from './software-module.service';
import { SoftwareModuleController } from './software-module.controller';

@Module({
  controllers: [SoftwareModuleController],
  providers: [SoftwareModuleService],
})
export class SoftwareModuleModule {}
