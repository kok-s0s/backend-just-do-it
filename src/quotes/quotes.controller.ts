import { Controller, Get, Param, Redirect, Req } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Request } from 'express';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get('today')
  getTodayQuote(): any {
    return this.quotesService.getTodayQuote();
  }

  @Get('findAll')
  @Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'test';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
