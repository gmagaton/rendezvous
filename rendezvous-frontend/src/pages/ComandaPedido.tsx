
import { useEffect, useRef, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import ComandaService, { ComandaModel } from '../services/ComandaService';
import ItemService, { ItemModel } from '../services/ItemService';
import ProdutoService, { ProdutoModel } from '../services/ProdutoService';
import Menu from './Menu';

function ComandaPedido() {
    const navigate = useNavigate();
    var comanda = useRef<ComandaModel>();
    const { idComanda } = useParams();
    const [produtos, setProdutos] = useState<ProdutoModel[]>([]);
    const { control, register, handleSubmit } = useForm();
    const { fields, append } = useFieldArray({
        control,
        name: "produtos"
    });
    const onSubmit: SubmitHandler<any> = data => solicitar(data);
    const itemService = new ItemService();


    useEffect(() => {
        const comandaService = new ComandaService();
        const produtoService = new ProdutoService();

        async function loadProducts() {
            if (idComanda != null) {
                await comandaService.buscar(idComanda).then((response) => (comanda.current = response.data));
            }
            await produtoService.listar()
                .then((response) => {
                    var p: ProdutoModel[] = response.data;
                    p.map((p) => (append({ idItem: null, idComanda: comanda.current?.idComanda, idProduto: p.idProduto, quantidade: null, preparado: false })));
                    setProdutos(response.data);
                    return;
                });

        }
        loadProducts();
    }, [append, idComanda]);

    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Novo Pedido - Mesa {comanda.current?.numeroMesa}</h1>
            </Row>
            <p></p>
            <Row>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fields.map((field, index) => (
                                <tr key={field.id.toString()}>
                                    <td>{produtos[index].nomeProduto}</td>
                                    <td>{produtos[index].descricaoProduto}</td>
                                    <td>R$ {produtos[index].preco}</td>
                                    <td>
                                        <Form.Control type="number"  {...register(`produtos.${index}.quantidade`)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button variant="primary" type="submit">Solicitar</Button>
                </Form>
            </Row>
        </Container>
    )

    function solicitar(produtosInformados: { produtos: ItemModel[] }) {
        console.log(produtosInformados.produtos);
        for (let p of produtosInformados.produtos) {
            if (p.quantidade > 0) {
                itemService.salvar(p)
                    .then((response) => (
                        alert("Pedido efetuado com sucesso")
                    ))
                    .catch((e) => {
                        alert("Erro ao efetuar pedido");
                        console.log(e.response.data.error);
                    });
            }
        }
        navigate('/comanda');
    }
}
export default ComandaPedido;