import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import button from "bootstrap/js/src/button";
import {Nav} from 'react-bootstrap';

import {Context1} from './../App.js'
import {useDispatch} from "react-redux";

import {addItem} from "../store";

/*useEffect 사용 이유
html랜더링 후에 동작함
자바스크립트는 위에서부터 코드를 읽기때문에 html전에 복잡한 코드가 있다면
html랜더링이 느려짐
시간이 오래 걸리는 어려운 작업,
서버에서 데이터 가져오는 작업,
타이머 장착하는 작업 은 useEffect 로 사용
* */

function ItemDetail(props) {

    let {재고, shoes} = useContext(Context1) //보관함 해체 그럼 사용 가능

    let [count, setCount] = useState(0)
    let [text, showAlert] = useState(true);
    let [value, changeValue] = useState('')
    let [탭, 탭변경] = useState(0)
    let [effect, setEffect] = useState('')


    let {id} = useParams();
    // console.log(id);
    let 찾은상품 = props.shoes.find(e=>e.id == id);
    // console.log(찾은상품) // 이 object를 cartData array에 push 해주면 됨..

    let dispatch = useDispatch() // store.js로 요청보내주는 함수


    // mount, update시 실행됨
    useEffect(()=>{
        let a = setTimeout(()=>{showAlert(false)}, 2000);
        setEffect('end')
        return ()=>{
            // cleanUp function
            // useEffect가 실행되기 전에 실행시키고 싶은 함수
            // 리액트 특성상 재랜더링이 잦음 보통 타이머를 놓는다면 이 부분에서 기존타이머를 제거
            clearTimeout(a);
            setEffect('')

            // 기존 데이터 요청은 제거해주세요~ 등등의 기능
        }
    }, []) // dependency를 설정해주면 count가 변할때만 useEffect가 실행됨, deps가 비어있으면 mount될때만 실행됨

    useEffect(()=>{
        if (isNaN(value)) {
            alert("숫자만 입력하세요");
        }
    }, [value])

    useEffect(()=>{
        let watched = localStorage.getItem('watched')
        let temp = JSON.parse(watched)
        temp.push(찾은상품.id)
        temp = new Set(temp)
        temp = Array.from(temp)
        localStorage.setItem('watched', JSON.stringify(temp))
    },[])



    return (
        <div className={"container start " + effect}>
            {/*{count}*/}
            {text==true? <Alert/> : null}
            <input onChange={(e)=>{
                changeValue(e.target.value);
                // console.log(value);
            }}/>

            <button onClick={()=>{ setCount(count+1)}}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={찾은상품.imageUrl} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <h4 className="pt-5">{props.shoes[0].title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch(addItem( {id :찾은상품.id, name: 찾은상품.title, count:1} ))
                    }} >주문하기</button>
                </div>
            </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabComponent 탭={탭} shoes={props.shoes}/>

        </div>
    )
}

function TabComponent({탭}) {
    let [fade, setFade] = useState('')
    let {재고, shoes} = useContext(Context1)


    useEffect(()=>{
        let a = setTimeout(()=>{setFade('end')}, 100)
        // setFade('end')
        return ()=>{
            // clearTimeout(a)
            setFade('')
        }
    },[탭]) // 탭이 변경될때마다 동작
    return (
        <div className={'start ' + fade}>
            { [<div>{shoes[0].title}</div>, <div>{재고}</div>, <div>내용2</div>][탭] }
        </div>)
}
function Alert() {
    return (
        <div className={"alert alert-warnig"}>2초이내 구매시 할인</div>
    )

}

export default ItemDetail;
