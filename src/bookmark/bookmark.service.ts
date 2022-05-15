import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getBookmarkCategoryForMongoDB = async () => {
  const bookmarkCategory = await prisma.bookmarkCategory.findMany({
    include: {
      bookmarks: true,
    },
  });
  return bookmarkCategory;
};

@Injectable()
export class BookmarkService {
  getBookmarkCategory(): any {
    const bookmarkCategory = getBookmarkCategoryForMongoDB()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return bookmarkCategory;
  }
}
