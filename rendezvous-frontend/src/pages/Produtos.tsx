import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import ProdutoService, { ProdutoModel } from '../services/ProdutoService';
import Menu from './Menu';

function Produtos() {
    const navigate = useNavigate();
    const [produtos, setAllProdutos] = useState<ProdutoModel[]>([]);
    const produtoService = new ProdutoService();

    function carregarProdutos() {
        produtoService.listar()
            .then((response) => {
                setAllProdutos(response.data);
            });
    }

    useEffect(() => {
        const produtoService = new ProdutoService();
        produtoService.listar()
            .then((response) => {
                setAllProdutos(response.data);
            });
    }, []);


    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Cadastro de Produtos do Cardápio</h1>
            </Row>
            <Row>
                <Button variant="primary" onClick={novo}>Novo Produto</Button>
            </Row>
            <p></p>
            <Row>
                <Button variant="primary" onClick={novaCategoria}>Nova Categoria</Button>
            </Row>
            <p></p>
            {produtos.length !== 0 &&
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th>Cozinha</th>
                                <th>Criação</th>
                                <th>Alteração</th>
                                <th>Preço</th>
                                <th>Editar</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((p) => (
                                <tr key={p.idProduto}>
                                    <td>{p.idProduto}</td>
                                    <td>{p.nomeProduto}</td>
                                    <td>{p.descricaoProduto}</td>
                                    <td>{p.idCategoria}</td>
                                    {p.cozinha ? <td>Sim</td> : <td>Não</td>}
                                    <td>{p.criacao}</td>
                                    <td>{p.alteracao}</td>
                                    <td>{p.preco}</td>
                                    <td><Button variant='primary' onClick={() => editar(p)}>Editar</Button></td>
                                    <td><Button variant='danger' onClick={() => remover(p)}>Remover</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            }
        </Container>
    )

    function novo() {
        navigate('/produto/form');
    }
    function novaCategoria() {
        navigate('/categoria/form');
    }
    function editar(u: ProdutoModel) {
        navigate('/produto/form/' + u.idProduto);
    }
    function remover(u: ProdutoModel) {
        produtoService.remover(u.idProduto)
            .then((response) => {
                alert("Produto removido com sucesso !");
                carregarProdutos();
            })
            .catch((e) => {
                alert("Falha ao remover produto !");
            });
    }
}
export default Produtos;