import './App.css';
import {createContext, useState} from "react";
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png'
// import ddd from './data.js';
// import {a, b} from './data.js'; // 중괄호로 가져올때는 export의 변수명을 그대로 가져와서 써야조
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import ItemDetail from "./routes/Detail";
import axios from "axios";
import Loading from "./Loading";
import Cart from "./routes/Cart.js"

export  let Context1 = createContext() // state보관함

function App() {

    let [재고] = useState([10, 11, 12])

    let [shoes, addShoes] = useState(data)
    let navigate = useNavigate();
    let [call, setNum] = useState(2)
    let [loading, setLoading] = useState(false)

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
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
                        <button onClick={()=>{
                            setNum(call+1)
                            console.log(call);
                            if (call < 4 ){
                            setLoading(true)
                            // 로딩중 ui 띄우기
                            axios.get('https://codingapple1.github.io/shop/data'+call+'.json')
                                .then((결과)=>{
                                    setLoading(false)
                                    let newData = [...shoes]
                                    // let copy = [...shoes, ...결과.data] // 이렇게도 가능 그럼 concat이 필요 없어짐
                                    newData = newData.concat(결과.data)
                                    console.log(newData)
                                    addShoes(newData)
                                })
                                .catch(()=>{
                                    console.log('실패')
                                    setLoading(false)
                                    // 로딩중 ui 숨기기
                                })
                            } else {
                                alert("조회할 데이터가 없습니다.")
                            }
                            // Promise.all([axios.get('/url1'), axios.get('/url2')]) // 동시에 ajax 요청 여러개
                            //     .then(()=>{})

                            // fetch('url')
                            //     .then(결과=>rufrhk.json) // JSON => array/object 변환 과정이 필요
                            //     .then(data=>{})


                        }}>더보기</button>
                        {loading == true ? <Loading></Loading> : null}
                    </div>
                    </>
                }/>
                <Route path={"/detail/:id"} element={
                    <Context1.Provider value={{ 재고, shoes }}>
                        <ItemDetail shoes={shoes}/>
                    </Context1.Provider>
                    } />

                <Route path={"/cart"} element={<Cart/>} />

                {/*nested routes /about/member 로 접근했을때, element가 2개 보임*/}
                <Route path={"/about"} element={<About/>}>
                    <Route path={"member"} element={<div>멤버임</div>} /> {/* 어디에 보여줄지 정하려면 <Outlet> */}
                    <Route path={"location"} element={<div>회사들 위치</div>} />
                </Route>

                {/*<Route path={"/about/member"} element={<About/>}/>*/}
                {/*<Route path={"/about/location"} element={<About/>}/>*/}

                <Route path={"/about"} element={<About/>} />
                <Route path={"*"} element={<div>존재하지 않는 페이지입니다.</div>} />

                <Route path={"/event"} element={<EventPage/>} >
                    <Route path={"one"} element={<div>첫 주문시 양배추즙 서비스</div>}/>
                    <Route path={"two"} element={<div>생일기념 쿠폰받기</div>}/>
                    <Route />
                </Route>
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

function EventPage() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
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
