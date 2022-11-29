import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';

function Produto() {
    const navigate = useNavigate();
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Cadastro de Produtos do Cardápio</h1>
            </Row>
            <Row>
                <Button variant="primary" onClick={novo}>Novo produto</Button>
            </Row>
            <p></p>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Criação</th>
                            <th>Alteração</th>
                            <th>Editar</th>
                            <th>Remover</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Original Garrafa 600ml</td>
                            <td>Bebidas</td>
                            <td>R$ 16,00</td>
                            <td>Cerveja Original Garrafa 600ml</td>
                            <td>28/11/2022 22:00</td>
                            <td>28/11/2022 22:00</td>
                            <td><Button variant='primary' onClick={editar}>Editar</Button></td>
                            <td><Button variant='danger' onClick={remover}>Remover</Button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Original Garrafa 600ml</td>
                            <td>Bebidas</td>
                            <td>R$ 16,00</td>
                            <td>Cerveja Original Garrafa 600ml</td>
                            <td>28/11/2022 22:00</td>
                            <td>28/11/2022 22:00</td>
                            <td><Button variant='primary' onClick={editar}>Editar</Button></td>
                            <td><Button variant='danger' onClick={remover}>Remover</Button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Original Garrafa 600ml</td>
                            <td>Bebidas</td>
                            <td>R$ 16,00</td>
                            <td>Cerveja Original Garrafa 600ml</td>
                            <td>28/11/2022 22:00</td>
                            <td>28/11/2022 22:00</td>
                            <td><Button variant='primary' onClick={editar}>Editar</Button></td>
                            <td><Button variant='danger' onClick={remover}>Remover</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )

    function novo() {
        navigate('/produto/novo');
    }
    function editar() {
        navigate('/produto/novo');
    }
    function remover() {
        navigate('/produto');
    }
}
export default Produto;