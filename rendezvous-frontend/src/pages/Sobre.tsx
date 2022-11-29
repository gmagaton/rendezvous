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
        </Container>

    )
}
export default Sobre;