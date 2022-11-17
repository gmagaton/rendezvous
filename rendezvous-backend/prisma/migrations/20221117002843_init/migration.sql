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
    "imagemProduto" BLOB NOT NULL,
    "criacao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "alteracao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Produto_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria" ("idCategoria") ON DELETE RESTRICT ON UPDATE CASCADE
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
