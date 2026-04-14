import { PartialType } from '@nestjs/mapped-types';
import { CreateSoftwareModuleDto } from './create-software-module.dto';

export class UpdateSoftwareModuleDto extends PartialType(CreateSoftwareModuleDto) {}
