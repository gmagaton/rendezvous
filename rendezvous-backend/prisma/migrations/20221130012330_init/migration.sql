/*
  Warnings:

  - You are about to alter the column `numeroMesa` on the `Comanda` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comanda" (
    "idComanda" TEXT NOT NULL PRIMARY KEY,
    "numeroMesa" DECIMAL NOT NULL,
    "aberta" BOOLEAN NOT NULL,
    "idUser" TEXT NOT NULL,
    CONSTRAINT "Comanda_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Usuario" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comanda" ("aberta", "idComanda", "idUser", "numeroMesa") SELECT "aberta", "idComanda", "idUser", "numeroMesa" FROM "Comanda";
DROP TABLE "Comanda";
ALTER TABLE "new_Comanda" RENAME TO "Comanda";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
