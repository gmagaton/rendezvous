import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';

function Cozinha() {
    const navigate = useNavigate();
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Pedidos Solicitados</h1>
            </Row>
            <p></p>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mesa</th>
                            <th>Produto</th>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                            <th>Data/Hora</th>
                            <th>Finalizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>01</td>
                            <td>Strogonoff de Frango</td>
                            <td>Acompanha arroz e batata</td>
                            <td>1</td>
                            <td>28/11/2022 22:00</td>
                            <td><Button variant='success' onClick={pronto}>Pronto</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )

    function pronto() {
        navigate('/cozinha');
    }
}
export default Cozinha;