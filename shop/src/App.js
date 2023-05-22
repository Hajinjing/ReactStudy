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
                        <Nav.Link href="#features">Cart</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="main-bg" style={{backgroundImage: 'url(' + bg + ')'}}></div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {/*<img src={process.env.PUBLIC_URL + './logo192.png'} width="80%"/> /!* public폴더 사용해서 이미지 넣는법*!/*/}
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div><div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div><div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;