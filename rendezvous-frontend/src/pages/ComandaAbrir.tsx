import { useEffect, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import ComandaService, { ComandaModel } from '../services/ComandaService';
import UsuarioService, { UsuarioModel } from '../services/UsuarioService';
import Menu from './Menu';

function ComandaAbrir() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<ComandaModel>();
    const [error, setError] = useState(null);
    const onSubmit: SubmitHandler<ComandaModel> = data => abrir(data);
    const comandaService = new ComandaService();
    const [usuarios, setUsuarios] = useState<UsuarioModel[]>([]);

    useEffect(() => {
        const usuarioService = new UsuarioService();
        usuarioService.listar()
            .then((response) => {
                setUsuarios(response.data);
            });
    }, []);

    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Abertura de Comanda</h1>
            </Row>
            <p></p>
            <Row>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Número da Mesa</Form.Label>
                        <Form.Control type="number" placeholder="Número da Mesa"  {...register("numeroMesa", { required: true })} />
                        {errors.numeroMesa && <Form.Text>Número da mesa inválido</Form.Text>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Usuário</Form.Label>
                        <Form.Select {...register("idUser", { required: true })}>
                            <option value="">Escolha o Usuário</option>
                            {usuarios.map((c) => (
                                <option key={c.idUser} value={c.idUser}>{c.nomeUser}</option>
                            ))}
                        </Form.Select>
                        {errors.idUser && <Form.Text>Usuário inválido</Form.Text>}
                    </Form.Group>

                    <Button variant="primary" type="submit">Salvar</Button>
                </Form>
            </Row>
        </Container>
    )
    function abrir(data: ComandaModel) {
        comandaService.abrir(data)
            .then(() => {
                alert('Comanda aberta com sucesso');
                navigate("/comanda");
            })
            .catch(function (e) {
                setError(e.response.data.error);
            });
    }
}
export default ComandaAbrir;