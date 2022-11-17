-- CreateTable
CREATE TABLE "categorias" (
    "idCategoria" TEXT NOT NULL PRIMARY KEY,
    "nomeCategoria" TEXT NOT NULL,
    "criacao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "alteracao" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "produtos" (
    "idProduto" TEXT NOT NULL PRIMARY KEY,
    "idCategoria" TEXT NOT NULL,
    "nomeProduto" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "descricaoProduto" TEXT NOT NULL,
    "imagemProduto" BLOB NOT NULL,
    "criacao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "alteracao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "produtos_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "categorias" ("idCategoria") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "comandas" (
    "idComanda" TEXT NOT NULL PRIMARY KEY,
    "numeroMesa" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "draft" BOOLEAN NOT NULL,
    "idUser" TEXT NOT NULL,
    CONSTRAINT "comandas_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "users" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "itens" (
    "idItem" TEXT NOT NULL PRIMARY KEY,
    "idComanda" TEXT NOT NULL,
    "idProduto" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "itens_idComanda_fkey" FOREIGN KEY ("idComanda") REFERENCES "comandas" ("idComanda") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "itens_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "produtos" ("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "idUser" TEXT NOT NULL PRIMARY KEY,
    "nomeUser" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfilUser" TEXT NOT NULL,
    "criacao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "alteracao" DATETIME DEFAULT CURRENT_TIMESTAMP
);
