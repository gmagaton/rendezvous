import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';

function ComandaAbrir() {
    const navigate = useNavigate();
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Abertura de Comanda</h1>
            </Row>
            <p></p>
            <Row>
                <Form onSubmit={abrirComanda}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Número da Mesa</Form.Label>
                        <Form.Control type="number" placeholder="Informe o número da Mesa" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Abrir</Button>
                </Form>
            </Row>
        </Container>
    )
    function abrirComanda() {
        navigate('/comanda');
    }
}
export default ComandaAbrir;