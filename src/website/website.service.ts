import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getWebsitesForMongoDB = async () => {
  const webSites = await prisma.webSite.findMany();
  return webSites;
};

const getArticlesForMongoDB = async () => {
  const webSites = await prisma.article.findMany();
  return webSites;
};

@Injectable()
export class WebsiteService {
  getWebSites(): any {
    const websites = getWebsitesForMongoDB()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return websites;
  }

  getArticles(): any {
    const websites = getArticlesForMongoDB()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return websites;
  }
}
