import { Body, Controller, Post } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post('one')
  getQuote(@Body() data: { quotesID: Array<{ id: string }> }): any {
    return this.quotesService.getQuote(data);
  }
}
