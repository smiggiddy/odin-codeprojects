/*
  Warnings:

  - Added the required column `full_path` to the `Folder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modification_date` to the `Folder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_folder_id` to the `Folder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "full_path" TEXT NOT NULL,
ADD COLUMN     "modification_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "owner_user_id" INTEGER,
ADD COLUMN     "parent_folder_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_owner_user_id_fkey" FOREIGN KEY ("owner_user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
