import { Injectable } from '@nestjs/common';
import { CreateSoftwareModuleDto } from './dto/create-software-module.dto';
import { UpdateSoftwareModuleDto } from './dto/update-software-module.dto';

@Injectable()
export class SoftwareModuleService {
  create(createSoftwareModuleDto: CreateSoftwareModuleDto) {
    return 'This action adds a new softwareModule';
  }

  findAll() {
    return `This action returns all softwareModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} softwareModule`;
  }

  update(id: number, updateSoftwareModuleDto: UpdateSoftwareModuleDto) {
    return `This action updates a #${id} softwareModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} softwareModule`;
  }
}
