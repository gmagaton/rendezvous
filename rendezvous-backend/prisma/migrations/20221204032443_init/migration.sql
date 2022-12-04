-- CreateTable
CREATE TABLE "Categoria" (
    "idCategoria" TEXT NOT NULL PRIMARY KEY,
    "nomeCategoria" TEXT NOT NULL,
    "criacao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "alteracao" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Produto" (
    "idProduto" TEXT NOT NULL PRIMARY KEY,
    "idCategoria" TEXT NOT NULL,
    "nomeProduto" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "descricaoProduto" TEXT NOT NULL,
    "imagemProduto" TEXT NOT NULL,
    "cozinha" BOOLEAN NOT NULL,
    "criacao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "alteracao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Produto_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria" ("idCategoria") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comanda" (
    "idComanda" TEXT NOT NULL PRIMARY KEY,
    "numeroMesa" DECIMAL NOT NULL,
    "aberta" BOOLEAN NOT NULL,
    "idUser" TEXT NOT NULL,
    CONSTRAINT "Comanda_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Usuario" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item" (
    "idItem" TEXT NOT NULL PRIMARY KEY,
    "idComanda" TEXT NOT NULL,
    "idProduto" TEXT NOT NULL,
    "quantidade" DECIMAL NOT NULL,
    "preparado" BOOLEAN NOT NULL,
    CONSTRAINT "Item_idComanda_fkey" FOREIGN KEY ("idComanda") REFERENCES "Comanda" ("idComanda") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Item_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto" ("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Usuario" (
    "idUser" TEXT NOT NULL PRIMARY KEY,
    "nomeUser" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfilUser" TEXT NOT NULL,
    "criacao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "alteracao" DATETIME DEFAULT CURRENT_TIMESTAMP
);
