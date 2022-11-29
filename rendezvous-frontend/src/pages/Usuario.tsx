import { useEffect, useState } from "react";
import { FormLabel, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import UsuarioService, { UsuarioModel } from "../services/UsuarioService";
import Menu from './Menu';

function Usuario() {
    const navigate = useNavigate();
    const [usuarios, setAllUsuarios] = useState<UsuarioModel[]>([]);
    const usuarioService = new UsuarioService();

    function carregarUsuarios() {
        usuarioService.listar()
            .then((response) => {
                setAllUsuarios(response.data);
            });
    }

    useEffect(() => {
        const usuarioService = new UsuarioService();
        usuarioService.listar()
            .then((response) => {
                setAllUsuarios(response.data);
            });
    }, []);


    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Cadastro de Usuários</h1>
            </Row>
            <Row>
                <Button onClick={novo}>Novo Usuário</Button>
            </Row>
            <p></p>
            {usuarios.length !== 0 &&
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Perfil</th>
                                <th>Criação</th>
                                <th>Alteração</th>
                                <th>Editar</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>

                            {usuarios.map((u) => (
                                <tr key={u.idUser}>
                                    <td>{u.idUser}</td>
                                    <td>{u.nomeUser}</td>
                                    <td>{u.perfilUser}</td>
                                    <td>{u.criacao}</td>
                                    <td>{u.alteracao}</td>
                                    <td><Button variant='primary' onClick={() => editar(u)}>Editar</Button></td>
                                    <td><Button variant='danger' onClick={() => remover(u)}>Remover</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            }
        </Container>
    )

    function novo() {
        navigate('/usuario/form');
    }
    function editar(u: UsuarioModel) {
        navigate('/usuario/form/' + u.idUser);
    }
    function remover(u: UsuarioModel) {
        usuarioService.remover(u.idUser)
            .then((response) => {
                alert("Usuário removido com sucesso !");
                carregarUsuarios();
            })
            .catch((e) => {
                alert("Falha ao remover usuário !");
            });
    }
}

export default Usuario;