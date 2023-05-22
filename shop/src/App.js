import './App.css';
import {useState} from "react";
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png'
// import ddd from './data.js';
// import {a, b} from './data.js'; // 중괄호로 가져올때는 export의 변수명을 그대로 가져와서 써야조
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import ItemDetail from "./routes/Detail";

function App() {

    let [shoes] = useState(data)
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">면
                <Container>
                    <Navbar.Brand href="#home">HAZZING WORLD</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{ navigate("/")}}>Home</Nav.Link>
                        {/*<Nav.Link onClick={()=>{ navigate(-1)}}>뒤로갸기</Nav.Link>*/}
                        {/*<Nav.Link href="/">Home</Nav.Link>*/}
                        <Nav.Link href="#features">Cart</Nav.Link>
                        <Nav.Link onClick={()=>{ navigate("/detail")}}>About</Nav.Link>
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

                {/*nested routes /about/member 로 접근했을때, element가 2개 보임*/}
                <Route path={"/about"} element={<About/>}>
                    <Route path={"member"} element={<div>멤버임</div>} /> {/* 어디에 보여줄지 정하려면 <Outlet> */}
                    <Route path={"location"} element={<div>회사들 위치</div>} />
                </Route>

                {/*<Route path={"/about/member"} element={<About/>}/>*/}
                {/*<Route path={"/about/location"} element={<About/>}/>*/}

                <Route path={"/about"} element={<About/>} />
                <Route path={"*"} element={<div>존재하지 않는 페이지입니다.</div>} />
            </Routes>


        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet> {/* nested routes의 element 보여주는 곳 */}
        </div>
    )
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



export default App;
