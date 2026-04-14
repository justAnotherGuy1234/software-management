import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoftwareModuleService } from './software-module.service';
import { CreateSoftwareModuleDto } from './dto/create-software-module.dto';
import { UpdateSoftwareModuleDto } from './dto/update-software-module.dto';

@Controller('software-module')
export class SoftwareModuleController {
  constructor(private readonly softwareModuleService: SoftwareModuleService) {}

  @Post()
  create(@Body() createSoftwareModuleDto: CreateSoftwareModuleDto) {
    return this.softwareModuleService.create(createSoftwareModuleDto);
  }

  @Get()
  findAll() {
    return this.softwareModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.softwareModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoftwareModuleDto: UpdateSoftwareModuleDto) {
    return this.softwareModuleService.update(+id, updateSoftwareModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.softwareModuleService.remove(+id);
  }
}
