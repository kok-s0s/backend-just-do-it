import { Controller, Get } from '@nestjs/common';
import { LeetcodeService } from './leetcode.service';

@Controller('leetcode')
export class LeetcodeController {
  constructor(private readonly leetcodeService: LeetcodeService) {}

  @Get('questions')
  getQuestions(): any {
    return this.leetcodeService.getQuestions();
  }

  @Get('difficulty')
  getDifficulty(): any {
    return this.leetcodeService.getDifficulty();
  }

  @Get('topictype')
  getTopicType(): any {
    return this.leetcodeService.getTopicType();
  }

  @Get('randomquestions')
  getRandomQuestions(): any {
    return this.leetcodeService.getRandomQuestions();
  }
}
