// /* eslint-disable @typescript-eslint/no-explicit-any */

// // FIXME: Seeding not working in 2.23.0 in Windows #7176 --> https://github.com/prisma/prisma/issues/7176

// // import { PrismaClient } from '@prisma/client';
// import { PrismaClient } from '@wwwsolutions/api/data-access/prisma';

// import { usersData } from '../seeds/mock-data';

// const prisma = new PrismaClient();

// async function main() {
//   //   console.log(`Start seeding ...`);
//   //   for (const u of users) {
//   //     const user = await prisma.user.create({
//   //       data: u,
//   //     });
//   //     console.log(`Created user with id: ${user.id}`);
//   //   }
//   //   console.log(`Seeding finished.`);

//   // https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide

//   // Nested write
//   const createOne = prisma.course.create({
//     data: {
//       title: 'Aurora Adventures',
//       authorId: 5,
//       lessons: {
//         create: {
//           title: 'Lesson 1',
//           content: 'Lesson 1 Content',
//         },
//       },
//     },
//   });

//   const createTwo = prisma.course.create({
//     data: {
//       title: 'Aurora Adventures 2',
//       authorId: 5,
//       lessons: {
//         create: {
//           title: 'Lesson 2',
//           content: 'Lesson 2 Content',
//         },
//       },
//     },
//   });

//   // $transaction API
//   await prisma.$transaction([createTwo, createOne]);

//   //   await prisma.$transaction(
//   //     usersData.map((user) =>
//   //       prisma.user.upsert({
//   //         where: { email: user.email },
//   //         update: {},
//   //         create: {
//   //           email: user.email,
//   //           password: user.password,
//   //           courses: {
//   //               create: user.banks.map((bank) => ({
//   //                   email: user.email,
//   //                   bank,
//   //               })),
//   //           },
//   //         },
//   //       })
//   //     )
//   //   );
// }

// main()
//   .catch((err) => {
//     console.log(err);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
