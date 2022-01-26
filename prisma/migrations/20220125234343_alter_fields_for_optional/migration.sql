-- AlterTable
ALTER TABLE "contacts" ALTER COLUMN "comments" DROP NOT NULL;

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "date_ready" DROP NOT NULL;

-- AlterTable
ALTER TABLE "phones" ALTER COLUMN "comments" DROP NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "description" DROP NOT NULL;
