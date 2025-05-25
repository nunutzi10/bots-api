import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

before(async () => {
  await prisma.$connect();
});

after(async () => {
  await prisma.$disconnect();
});

export default prisma;