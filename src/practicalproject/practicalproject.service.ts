import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getProjectsForMongoDB = async () => {
  const projects = await prisma.project.findMany();
  return projects;
};

@Injectable()
export class PracticalprojectService {
  getProjects(): any {
    const projects = getProjectsForMongoDB()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return projects;
  }
}
