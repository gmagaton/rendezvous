
import { Col, Form, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';

function ComandaFechar() {
    const navigate = useNavigate();
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Fechar Comanda - Mesa 00</h1>
            </Row>
            <p></p>
            <Row>
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
                            <tr>
                                <td>Original Garrafa 600ml</td>
                                <td>R$ 16,00</td>
                                <td>10</td>
                                <td>R$ 160,00</td>
                            </tr>
                            <tr>
                                <td>Original Garrafa 600ml</td>
                                <td>R$ 16,00</td>
                                <td>10</td>
                                <td>R$ 160,00</td>
                            </tr>
                            <tr>
                                <td>Original Garrafa 600ml</td>
                                <td>R$ 16,00</td>
                                <td>10</td>
                                <td>R$ 160,00</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>R$ 560,00</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="danger" type="submit">Fechar Comanda</Button>

                </Form>
            </Row>
        </Container>
    )

    function fechar() {
        navigate('/comanda');
    }
}
export default ComandaFechar;