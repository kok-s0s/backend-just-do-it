import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getQuoteForMongoDB = async (data: {
  quotesID: Array<{ id: string }>;
}) => {
  const quotes: Array<{ id: string }> = await prisma.quote.findMany();
  let rand = Math.floor(Math.random() * quotes.length);
  let flag = true;

  if (quotes.length === data.quotesID.length) {
    flag = false;
  } else {
    while (data.quotesID.includes(quotes.slice(rand, rand + 1)[0]))
      rand = Math.floor(Math.random() * quotes.length);
  }

  return flag ? quotes.slice(rand, rand + 1)[0] : { over: true };
};

@Injectable()
export class QuotesService {
  getQuote(data: { quotesID: Array<{ id: string }> }): any {
    const quote = getQuoteForMongoDB(data)
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return quote;
  }
}
