import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeetcodeModule } from './leetcode/leetcode.module';

@Module({
  imports: [LeetcodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
