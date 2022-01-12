import { Prisma } from '@prisma/client';

export const usersData: Prisma.UserCreateInput[] = [
  {
    email: 'alice@prisma.io',
    password: 'password',
  },
  {
    email: 'dracula@prisma.io',
    password: 'password',
  },
];
