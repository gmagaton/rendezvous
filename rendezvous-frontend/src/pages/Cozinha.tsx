import { useEffect, useState } from 'react';
import { Alert, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import CozinhaService from '../services/CozinhaService';
import { ItemModel } from '../services/ItemService';
import Menu from './Menu';

function Cozinha() {
    const navigate = useNavigate();
    const [itens, setItens] = useState<ItemModel[]>([]);
    const [error, setError] = useState(null);
    const cozinhaService = new CozinhaService();

    function carregarItens() {
        const cozinhaService = new CozinhaService();
        cozinhaService.listar().then((response) => (setItens(response.data)));
    }

    useEffect(() => {
        carregarItens();
    }, []);
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Pedidos Solicitados</h1>
            </Row>
            <p></p>
            <Row>
                {error && <Alert variant="danger">{error}</Alert>}
                {itens.length > 0 &&
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Mesa</th>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Finalizar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itens.map((i) => (
                                <tr key={i.idItem.toString()}>
                                    <td>{i.comanda.numeroMesa}</td>
                                    <td>R$ {i.produto.nomeProduto}</td>
                                    <td>{i.quantidade}</td>
                                    <td>R$ {i.quantidade * i.produto.preco}</td>
                                    <td><Button variant='success' onClick={() => pronto(i)}>Pronto</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                }
            </Row>
        </Container>
    )

    async function pronto(item: ItemModel) {
        await cozinhaService.preparado(item.idItem.toString())
            .then(() => {
                alert('Item preparado com sucesso !');
                carregarItens();
            })
            .catch(function (e) {
                setError(e.response.data.error);
            });
    }
}
export default Cozinha;