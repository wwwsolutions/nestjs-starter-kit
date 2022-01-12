/*
  Warnings:

  - You are about to drop the `Samurai` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Samurai";

-- CreateTable
CREATE TABLE "samurais" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "samurais_pkey" PRIMARY KEY ("id")
);
