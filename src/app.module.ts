import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CrudSampleModule } from './crud-sample/crud-sample.module';

@Module({
  imports: [CrudSampleModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
