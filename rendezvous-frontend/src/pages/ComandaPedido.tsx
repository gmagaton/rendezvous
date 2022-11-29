
import { Form, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';

function ComandaPedido() {
    const navigate = useNavigate();
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Novo Pedido - Mesa 00</h1>
            </Row>
            <p></p>
            <Row>
                <Form onSubmit={solicitar}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Original Garrafa 600ml</td>
                                <td>Bebidas</td>
                                <td>Cerveja Original Garrafa 600ml</td>
                                <td>R$ 16,00</td>
                                <td>
                                    <Form.Control type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>Original Garrafa 600ml</td>
                                <td>Bebidas</td>
                                <td>Cerveja Original Garrafa 600ml</td>
                                <td>R$ 16,00</td>
                                <td>
                                    <Form.Control type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>Original Garrafa 600ml</td>
                                <td>Bebidas</td>
                                <td>Cerveja Original Garrafa 600ml</td>
                                <td>R$ 16,00</td>
                                <td>
                                    <Form.Control type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>Original Garrafa 600ml</td>
                                <td>Bebidas</td>
                                <td>Cerveja Original Garrafa 600ml</td>
                                <td>R$ 16,00</td>
                                <td>
                                    <Form.Control type="text" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="primary" type="submit">Solicitar</Button>
                </Form>
            </Row>
        </Container>
    )

    function solicitar() {
        navigate('/comanda');
    }
}
export default ComandaPedido;