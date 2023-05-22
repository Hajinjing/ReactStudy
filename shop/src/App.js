import './App.css';
import {useState} from "react";
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png'
// import ddd from './data.js';
// import {a, b} from './data.js'; // 중괄호로 가져올때는 export의 변수명을 그대로 가져와서 써야조
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

    let [shoes] = useState(data)

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">면
                <Container>
                    <Navbar.Brand href="#home">HAZZING WORLD</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#features">Cart</Nav.Link>
                        <Nav.Link href="/detail">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path={"/"} element={
                    <>
                    <div className="main-bg" style={{backgroundImage: 'url(' + bg + ')'}}></div>
                    <div className="container">
                        <div className="row">
                            {
                                <ItemInfo shoes={shoes}/>
                            }

                        </div>
                    </div>
                    </>
                }/>
                <Route path={"/detail"} element={<ItemDetail/>} />
            </Routes>


        </div>
    );
}

function ItemInfo(props) {
    return (
        props.shoes.map(function (a, i) {
            return (
                <div className={"col-md-4"} key={i}>
                    {/*<img src={props.shoes[i].imageUrl} width="80%"/>*/}
                    <img src={'https://codingapple1.github.io/shop/shoes'+(i+1)+'.jpg'} width="80%"/>
                    <h4>{props.shoes[i].title}</h4>
                    <p>{props.shoes[i].price}</p>
                </div>

            )
        })
        // <div className="col-md-4">
        //     {/*<img src={process.env.PUBLIC_URL + './logo192.png'} width="80%"/> /!* public폴더 사용해서 이미지 넣는법*!/*/}
        //     <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
        //     <h4>{props.shoes[0].title}</h4>
        //     <p>{props.shoes[0].price}</p>
        // </div>

        )

}

function ItemDetail() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default App;
