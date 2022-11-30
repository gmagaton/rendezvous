import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import ComandaService, { ComandaModel } from '../services/ComandaService';
import Menu from './Menu';

function Comandas() {
    const navigate = useNavigate();
    const [comandas, setComandas] = useState<ComandaModel[]>([]);
    const comandaService = new ComandaService();

    function carregarComandas() {
        comandaService.listar()
            .then((response) => {
                setComandas(response.data);
            });
    }

    useEffect(() => {
        const comandaService = new ComandaService();
        comandaService.listar()
            .then((response) => {
                setComandas(response.data);
            });
    }, []);
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
            {comandas.length !== 0 &&
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
                            {comandas.map((c) => (
                                <tr key={c.idComanda}>
                                    <td>{c.numeroMesa}</td>
                                    {c.aberta ? <td>Sim</td> : <td>Não</td>}
                                    <td><Button variant='primary' onClick={() => fechar(c)}>Fechar Conta</Button></td>
                                    <td><Button variant='primary' onClick={() => novoPedido(c)}>Novo Pedido</Button></td>
                                    <td><Button variant='danger' onClick={() => excluir(c)}>Excluir</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            }
        </Container>
    )
    function abrir() {
        navigate('/comanda/abrir');
    }
    function fechar(c: ComandaModel) {
        navigate('/comanda/fechar/:idComanda');
    }
    function excluir(c: ComandaModel) {
        comandaService.remover(c.idComanda)
            .then((response) => {
                alert("Comanda removida com sucesso !");
                carregarComandas();
            })
            .catch((e) => {
                alert("Falha ao remover comanda !");
            });
    }
    function novoPedido(c: ComandaModel) {
        navigate('/comanda/pedido/:idComanda');
    }
}
export default Comandas;