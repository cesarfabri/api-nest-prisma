/*
  Warnings:

  - A unique constraint covering the columns `[fk_id_product]` on the table `composition` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "composition_fk_id_product_key" ON "composition"("fk_id_product");
