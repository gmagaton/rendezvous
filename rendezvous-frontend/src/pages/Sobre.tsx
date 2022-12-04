import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './Menu';

function Sobre() {
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Sobre Nós</h1>
            </Row>
            <label>O sabor da França em uma autêntica experiência de Rendezvous</label>
            <p></p>
            <label>
                Somos um restaurente autêntico da gastronomia Francesa, venha saborear nossos deliciosos pratos!
            </label>
            <img className="profile-photo" src={require("../images/restaurante.webp")} alt={"Restaurante"} />
        </Container>

    )
}
export default Sobre;