-- AlterTable
ALTER TABLE "File" ADD COLUMN     "uuid" UUID NOT NULL DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "uuid" UUID NOT NULL DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "uuid" UUID NOT NULL DEFAULT gen_random_uuid();
