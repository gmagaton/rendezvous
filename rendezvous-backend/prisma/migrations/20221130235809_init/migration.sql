-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "idItem" TEXT NOT NULL PRIMARY KEY,
    "idComanda" TEXT NOT NULL,
    "idProduto" TEXT NOT NULL,
    "quantidade" DECIMAL NOT NULL,
    "preparado" BOOLEAN NOT NULL,
    CONSTRAINT "Item_idComanda_fkey" FOREIGN KEY ("idComanda") REFERENCES "Comanda" ("idComanda") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Item_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto" ("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("idComanda", "idItem", "idProduto", "preparado", "quantidade") SELECT "idComanda", "idItem", "idProduto", "preparado", "quantidade" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
