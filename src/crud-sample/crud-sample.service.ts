import { Injectable } from '@nestjs/common';
import { CreateCrudSampleDto } from './dto/create-crud-sample.dto';
import { UpdateCrudSampleDto } from './dto/update-crud-sample.dto';

@Injectable()
export class CrudSampleService {
  create(createCrudSampleDto: CreateCrudSampleDto) {
    return 'This action adds a new crudSample';
  }

  findAll() {
    return `This action returns all crudSample`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crudSample`;
  }

  update(id: number, updateCrudSampleDto: UpdateCrudSampleDto) {
    return `This action updates a #${id} crudSample`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudSample`;
  }
}
