import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
  getTodayQuote(): any {
    return 'toadyQuote';
  }
}
