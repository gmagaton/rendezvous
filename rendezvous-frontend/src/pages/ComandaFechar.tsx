
import { useEffect, useRef, useState } from 'react';
import { Alert, Form, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from "react-router-dom";
import ComandaService, { ComandaModel } from '../services/ComandaService';
import ItemService, { ItemModel } from '../services/ItemService';
import Menu from './Menu';

function ComandaFechar() {
    const navigate = useNavigate();
    const { idComanda } = useParams();
    const [itens, setItens] = useState<ItemModel[]>([]);
    const [comanda, setComanda] = useState<ComandaModel>();
    const [error, setError] = useState(null);
    const comandaService = new ComandaService();

    useEffect(() => {
        const itemService = new ItemService();
        const comandaService = new ComandaService();
        if (idComanda != null) {
            comandaService.buscar(idComanda).then((response) => (setComanda(response.data)));
            itemService.consultaItensComanda(idComanda).then((response) => (setItens(response.data)));
        }
    }, [idComanda]);
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Fechar Comanda - Mesa {comanda?.numeroMesa}</h1>
            </Row>
            <p></p>
            <Row>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={fechar}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itens.map((i) => (
                                <tr key={i.idItem.toString()}>
                                    <td>{i.produto.nomeProduto}</td>
                                    <td>R$ {i.produto.preco}</td>
                                    <td>{i.quantidade}</td>
                                    <td>R$ {i.quantidade * i.produto.preco}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td>R$ {itens.reduce((a, v) => a = a + v.produto.preco * v.quantidade, 0)}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="danger" type="button" onClick={fechar}>Fechar Comanda</Button>

                </Form>
            </Row>
        </Container>
    )

    function fechar() {
        if (!comanda) {
            return;
        }
        comandaService.fechar(comanda)
            .then(() => {
                alert('Comanda encerrada com sucesso');
                navigate("/comanda");
            })
            .catch(function (e) {
                setError(e.response.data.error);
            });
    }
}
export default ComandaFechar;