import { Nav } from 'react-bootstrap';

function Menu() {
    return (
        <Nav className="navbar">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/sobre">Sobre</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/usuario">Usuários</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/produto">Cardápio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/comanda">Comandas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/cozinha">Cozinha</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Sair</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default Menu;