import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';

function ProdutoNovo() {
    const navigate = useNavigate();
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Cadastrar Produto no Cardápio</h1>
            </Row>
            <p></p>
            <Row>
                <Form onSubmit={salvar}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome do produto" />
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="text" placeholder="Descrição do produto" />
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type="text" placeholder="Categoria do produto" />
                        <Form.Label>Preço</Form.Label>
                        <Form.Control type="number" placeholder="Preço do produto" />
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="file" placeholder="Imagem do produto" />
                        <Form.Label>Cozinha</Form.Label>
                        <Form.Check type="checkbox" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Cadastrar</Button>
                </Form>
            </Row>
        </Container>
    )
    function salvar() {
        navigate('/produto');
    }
}
export default ProdutoNovo;