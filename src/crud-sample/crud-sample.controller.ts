import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrudSampleService } from './crud-sample.service';
import { CreateCrudSampleDto } from './dto/create-crud-sample.dto';
import { UpdateCrudSampleDto } from './dto/update-crud-sample.dto';

@Controller('crud-sample')
export class CrudSampleController {
  constructor(private readonly crudSampleService: CrudSampleService) {}

  @Post()
  create(@Body() createCrudSampleDto: CreateCrudSampleDto) {
    return this.crudSampleService.create(createCrudSampleDto);
  }

  @Get()
  findAll() {
    return this.crudSampleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudSampleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCrudSampleDto: UpdateCrudSampleDto,
  ) {
    return this.crudSampleService.update(+id, updateCrudSampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudSampleService.remove(+id);
  }
}
