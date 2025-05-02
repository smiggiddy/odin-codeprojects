/*
  Warnings:

  - You are about to drop the column `full_path` on the `Folder` table. All the data in the column will be lost.
  - You are about to drop the column `parent_folder_id` on the `Folder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Folder" DROP COLUMN "full_path",
DROP COLUMN "parent_folder_id",
ADD COLUMN     "parentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
