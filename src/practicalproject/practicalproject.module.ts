import { Module } from '@nestjs/common';
import { PracticalprojectService } from './practicalproject.service';
import { PracticalprojectController } from './practicalproject.controller';

@Module({
  providers: [PracticalprojectService],
  controllers: [PracticalprojectController],
})
export class PracticalprojectModule {}
