import { Module } from '@nestjs/common';
import { LeetcodeService } from './leetcode.service';
import { LeetcodeController } from './leetcode.controller';

@Module({
  providers: [LeetcodeService],
  controllers: [LeetcodeController],
})
export class LeetcodeModule {}
