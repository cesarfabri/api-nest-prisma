/*
  Warnings:

  - You are about to drop the `composition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "composition" DROP CONSTRAINT "composition_fk_id_product_fkey";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "cost" DECIMAL(65,30),
ADD COLUMN     "percent" INTEGER;

-- DropTable
DROP TABLE "composition";

-- CreateTable
CREATE TABLE "compositions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "unit" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3),
    "fk_id_product" TEXT NOT NULL,

    CONSTRAINT "compositions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "compositions_fk_id_product_key" ON "compositions"("fk_id_product");

-- AddForeignKey
ALTER TABLE "compositions" ADD CONSTRAINT "compositions_fk_id_product_fkey" FOREIGN KEY ("fk_id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
