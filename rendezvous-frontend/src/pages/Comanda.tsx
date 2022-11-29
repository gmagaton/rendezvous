import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';

function Comanda() {
    const navigate = useNavigate();
    return (

        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Gerenciamento das Comandas</h1>
            </Row>
            <Row>
                <Button variant="primary" onClick={abrir}>Abrir Mesa</Button>
            </Row>
            <p></p>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Mesa</th>
                            <th>Status</th>
                            <th>Fechar Conta</th>
                            <th>Novo Pedido</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>ABERTA</td>
                            <td><Button variant='success' onClick={fechar}>Fechar Conta</Button></td>
                            <td><Button variant='primary' onClick={novoPedido}>Novo Pedido</Button></td>
                            <td><Button variant='danger' onClick={excluir}>Excluir</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )

    function abrir() {
        navigate('/comanda/abrir');
    }
    function fechar() {
        navigate('/comanda/fechar');
    }
    function excluir() {
        navigate('/comanda');
    }
    function novoPedido() {
        navigate('/comanda/pedido');
    }
}
export default Comanda;