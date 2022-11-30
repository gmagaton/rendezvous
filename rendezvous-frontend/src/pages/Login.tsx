import { useNavigate } from "react-router-dom";
import LoginService from "../services/LoginService";
import { Alert, Button, Container, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type Inputs = {
    nomeUser: string,
    senha: string
};

function Login(props: any) {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => login(data);
    const [error, setError] = useState(null);

    function login(data: Inputs) {
        const service = new LoginService();

        service.login(data.nomeUser, data.senha)
            .then(() => {
                navigate("/home");
            })
            .catch(function (e) {
                setError(e.response.data.error);
            });
    }
    return (
        <Container>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Acesso ao Sistema</h1>
            </Row>
            <p></p>
            <Row>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Usuário"  {...register("nomeUser", { required: true })} />
                        {errors.nomeUser && <Form.Text>Usuário inválido</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha"  {...register("senha", { required: true })} />
                        {errors.senha && <Form.Text>Senha inválida</Form.Text>}
                    </Form.Group>

                    <Button variant="primary" type="submit">Salvar</Button>
                </Form>
            </Row>
        </Container>
    );
}

export default Login;

