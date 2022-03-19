import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getQuestionsForMongoDB = async () => {
  const questions = await prisma.leetCodeQuestion.findMany();
  return questions;
};

const getDifficultyForMongoDB = async () => {
  const difficulty = await prisma.leetCodeDifficulty.findMany({
    include: {
      questions: true,
    },
  });
  return difficulty;
};

const getTopicTypeForMongoDB = async () => {
  const topictype = await prisma.topicType.findMany({
    include: {
      questions: true,
    },
  });
  return topictype;
};

@Injectable()
export class LeetcodeService {
  getQuestions(): any {
    const questions = getQuestionsForMongoDB()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return questions;
  }

  getDifficulty(): any {
    const difficulty = getDifficultyForMongoDB()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return difficulty;
  }

  getTopicType(): any {
    const topictype = getTopicTypeForMongoDB()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return topictype;
  }
}
