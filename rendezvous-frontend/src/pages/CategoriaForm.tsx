import { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CategoriaService, { CategoriaModel } from '../services/CategoriaService';
import Menu from './Menu';

function CategoriaForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<CategoriaModel>();
    const [error, setError] = useState(null);
    const onSubmit: SubmitHandler<CategoriaModel> = data => salvar(data);
    const categoriaService = new CategoriaService();
    const { idCategoria } = useParams();

    if (idCategoria != null) {
        categoriaService.buscar(idCategoria)
            .then((response) => {
                setValue("idCategoria", response.data.idCategoria);
                setValue("nomeCategoria", response.data.nomeCategira);
            });
    }

    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Cadastrar Categoria</h1>
            </Row>
            <p></p>
            <Row>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nome da Categoria</Form.Label>
                        <Form.Control type="text" placeholder="Nome da Categoria"  {...register("nomeCategoria", { required: true })} />
                        {errors.nomeCategoria && <Form.Text>Nome inválido</Form.Text>}
                    </Form.Group>

                    <Button variant="primary" type="submit">Salvar</Button>
                </Form>
            </Row>
        </Container>
    )
    function salvar(data: CategoriaModel) {
        categoriaService.salvar(data)
            .then(() => {
                alert('Categoria salva com sucesso');
                navigate("/produto");
            })
            .catch(function (e) {
                setError(e.response.data.error);
            });
    }
}
export default CategoriaForm;