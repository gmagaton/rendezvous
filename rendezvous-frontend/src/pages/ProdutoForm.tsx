import { useEffect, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import CategoriaService, { CategoriaModel } from '../services/CategoriaService';
import ProdutoService, { ProdutoModel } from '../services/ProdutoService';
import Menu from './Menu';

function ProdutoForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<ProdutoModel>();
    const [error, setError] = useState(null);
    const onSubmit: SubmitHandler<ProdutoModel> = data => salvar(data);
    const produtoService = new ProdutoService();
    const { idProduto } = useParams();
    const [categorias, setCategorias] = useState<CategoriaModel[]>([]);

    const imagemBase64: string = "data:image/jpeg;base64,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";
    setValue("imagemProduto", imagemBase64);

    if (idProduto != null) {
        produtoService.buscar(idProduto)
            .then((response) => (
                setValuesProduto(response.data)
            ));
    }

    function setValuesProduto(produto: ProdutoModel) {
        setValue("idProduto", produto.idProduto);
        setValue("idCategoria", produto.idCategoria);
        setValue("nomeProduto", produto.nomeProduto);
        setValue("preco", produto.preco);
        setValue("descricaoProduto", produto.descricaoProduto);
        setValue("imagemProduto", produto.imagemProduto);
        setValue("cozinha", produto.cozinha);
    }

    useEffect(() => {
        const categoriaService = new CategoriaService();
        categoriaService.listar()
            .then((response) => {
                setCategorias(response.data);
            });
    }, []);

    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Cadastrar Produto no Cardápio</h1>
            </Row>
            <p></p>
            <Row>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome do produto" {...register("nomeProduto", { required: true })} />
                        {errors.nomeProduto && <Form.Text>Nome inválido</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="text" placeholder="Descrição do produto" {...register("descricaoProduto", { required: true })} />
                        {errors.descricaoProduto && <Form.Text>Descrição inválida</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select {...register("idCategoria", { required: true })}>
                            <option value="">Escolha a Categoria</option>
                            {categorias.map((c) => (
                                <option key={c.idCategoria} value={c.idCategoria}>{c.nomeCategoria}</option>
                            ))}
                        </Form.Select>
                        {errors.idCategoria && <Form.Text>Categoria inválida</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Preço</Form.Label>
                        <Form.Control type="number" placeholder="Preço do produto" {...register("preco", { required: true })} />
                        {errors.preco && <Form.Text>Preço inválido</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="file" placeholder="Imagem do produto" />
                        {errors.imagemProduto && <Form.Text>Imagem inválida</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="Produto de preparação na cozinha" {...register("cozinha")} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Salvar</Button>
                </Form>
            </Row>
        </Container>
    )
    function salvar(data: ProdutoModel) {
        produtoService.salvar(data)
            .then(() => {
                alert('Produto salvo com sucesso');
                navigate("/produto");
            })
            .catch(function (e) {
                setError(e.response.data.error);
            });
    }
}
export default ProdutoForm;