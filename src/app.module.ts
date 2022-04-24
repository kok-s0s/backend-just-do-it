import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeetcodeModule } from './leetcode/leetcode.module';
import { BooksModule } from './books/books.module';
import { PracticalprojectModule } from './practicalproject/practicalproject.module';
import { WebsiteModule } from './website/website.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    LeetcodeModule,
    BooksModule,
    PracticalprojectModule,
    WebsiteModule,
    QuotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
