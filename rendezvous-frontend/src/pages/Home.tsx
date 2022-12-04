import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './Menu';

function Home() {
    return (
        <Container>
            <Menu></Menu>
            <Row>
                <h1 className="h3 mb-3 fw-normal">Home</h1>
                <label>O sabor da França em uma autêntica experiência de Rendezvous</label>
                <p></p>
                <label>
                    O Rendezvous traz a magia parisiense para São Paulo, servindo a autêntica e generosa culinária francesa! Nosso menu é composto por pratos típicos, preparados com ingredientes da melhor qualidade e respeitando as receitas tradicionais e familiares, além do toque da alta gastronomia!
                </label>
                <img className="profile-photo" src={require("../images/prato.png")} alt={"Prato"} />
            </Row>
        </Container>

    )
}
export default Home;