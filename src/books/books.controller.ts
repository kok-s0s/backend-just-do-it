import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('classification')
  getBookClassification(): any {
    return this.booksService.getBookClassification();
  }
}
