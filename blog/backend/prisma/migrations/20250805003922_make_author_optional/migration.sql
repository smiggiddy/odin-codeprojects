/*
  Warnings:

  - Made the column `name` on table `Comments` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "dateCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT,
    "postId" INTEGER NOT NULL,
    CONSTRAINT "Comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comments" ("authorId", "content", "dateCreated", "id", "name", "postId") SELECT "authorId", "content", "dateCreated", "id", "name", "postId" FROM "Comments";
DROP TABLE "Comments";
ALTER TABLE "new_Comments" RENAME TO "Comments";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
