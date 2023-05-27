import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import button from "bootstrap/js/src/button";
import {Nav} from 'react-bootstrap';

/*useEffect 사용 이유
html랜더링 후에 동작함
자바스크립트는 위에서부터 코드를 읽기때문에 html전에 복잡한 코드가 있다면
html랜더링이 느려짐
시간이 오래 걸리는 어려운 작업,
서버에서 데이터 가져오는 작업,
타이머 장착하는 작업 은 useEffect 로 사용
* */

function ItemDetail(props) {


    let [count, setCount] = useState(0)
    let [text, showAlert] = useState(true);
    let [value, changeValue] = useState('')
    let [탭, 탭변경] = useState(0)

    let {id} = useParams();
    // console.log(id);
    let 찾은상품 = props.shoes.find(e=>e.id == id);


    // mount, update시 실행됨
    useEffect(()=>{
        let a = setTimeout(()=>{showAlert(false)}, 2000);
        console.log('useEffect')
        return ()=>{
            console.log('cleanup')
            // cleanUp function
            // useEffect가 실행되기 전에 실행시키고 싶은 함수
            // 리액트 특성상 재랜더링이 잦음 보통 타이머를 놓는다면 이 부분에서 기존타이머를 제거
            clearTimeout(a);

            // 기존 데이터 요청은 제거해주세요~ 등등의 기능
        }
    }, []) // dependency를 설정해주면 count가 변할때만 useEffect가 실행됨, deps가 비어있으면 mount될때만 실행됨

    useEffect(()=>{
        if (isNaN(value)) {
            alert("숫자만 입력하세요");
        }
    }, [value])



    return (
        <div className="container">
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
                    <button className="btn btn-danger">주문하기</button>
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
            <TabComponent 탭={탭}/>

        </div>
    )
}

function TabComponent(탭) {
    if (탭 == 0) {
        return <div>내용0</div>
    } else if(탭 == 1) {
        return <div>내용1</div>
    } else {
        return <div>내용2</div>
    }
    // return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]  // if문 없이하는법
}
function Alert() {
    return (
        <div className={"alert alert-warnig"}>2초이내 구매시 할인</div>
    )

}

export default ItemDetail;
