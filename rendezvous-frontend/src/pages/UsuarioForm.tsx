import { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import UsuarioService, { UsuarioModel } from "../services/UsuarioService";
import Menu from './Menu';

function UsuarioForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<UsuarioModel>();
    const [error, setError] = useState(null);
    const onSubmit: SubmitHandler<UsuarioModel> = data => salvar(data);
    const usuarioService = new UsuarioService();
    const { idUser } = useParams();

    if (idUser != null) {
        usuarioService.buscar(idUser)
            .then((response) => {
                setValue("idUser", response.data.idUser);
                setValue("nomeUser", response.data.nomeUser);
                setValue("perfilUser", response.data.perfilUser);
                setValue("senha", response.data.senha);
                setValue("confirmacaoSenha", response.data.senha);
            });
    }

    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Cadastrar Usuario</h1>
            </Row>
            <p></p>
            <Row>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome do Usuário"  {...register("nomeUser", { required: true })} />
                        {errors.nomeUser && <Form.Text>Nome inválido</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Perfil</Form.Label>
                        <Form.Select {...register("perfilUser", { required: true })}>
                            <option value="">Escolha o Perfil</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="GARÇON">GARÇON</option>
                            <option value="COZINHEIRO">COZINHEIRO</option>
                            <option value="GERENTE">GERENTE</option>
                        </Form.Select>
                        {errors.perfilUser && <Form.Text>Perfil inválido</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha"  {...register("senha", { required: true })} />
                        {errors.senha && <Form.Text>Senha inválida</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirmação Senha</Form.Label>
                        <Form.Control type="password" placeholder="Confirmação de senha" {...register("confirmacaoSenha", { required: true })} />
                        {errors.confirmacaoSenha && <Form.Text>Confirmação de senha inválida</Form.Text>}
                    </Form.Group>

                    <Button variant="primary" type="submit">Salvar</Button>
                </Form>
            </Row>
        </Container>
    )
    function salvar(data: UsuarioModel) {
        if (data.senha !== data.confirmacaoSenha) {
            alert('Confirmação de senha inválida');
            return;
        }
        console.log(data);

        usuarioService.salvar(data)
            .then(() => {
                alert('Usuario salvo com sucesso');
                navigate("/usuario");
            })
            .catch(function (e) {
                setError(e.response.data.error);
            });
    }
}
export default UsuarioForm;