import './App.css';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png'

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">HAZZING WORLD</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Menu</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <div className="main-bg" style={{backgroundImage : 'url('+bg+')'}}></div>

    </div>
  );
}

export default App;
