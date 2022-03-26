import { Controller, Get } from '@nestjs/common';
import { PracticalprojectService } from './practicalproject.service';

@Controller('practicalproject')
export class PracticalprojectController {
  constructor(private readonly practicalProject: PracticalprojectService) {}

  @Get('projects')
  getQuestions(): any {
    return this.practicalProject.getProjects();
  }
}
