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

const getBookmarksForMongoDB = async () => {
  const bookmarks = await prisma.bookMark.findMany();
  return bookmarks;
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

  getBookmarks(): any {
    const bookmarks = getBookmarksForMongoDB()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return bookmarks;
  }
}
