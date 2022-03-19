import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const difficulty = await prisma.leetCodeDifficulty.findMany({
    include: {
      questions: true,
    },
  });

  console.dir(difficulty, { depth: Infinity });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
