import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getBookClassificationForMongoDB = async () => {
  const bookClassification = await prisma.bookClassification.findMany({
    include: {
      books: true,
    },
  });
  return bookClassification;
};

@Injectable()
export class BooksService {
  getBookClassification(): any {
    const bookClassification = getBookClassificationForMongoDB()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return bookClassification;
  }
}
