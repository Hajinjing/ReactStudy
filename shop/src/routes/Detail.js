import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import button from "bootstrap/js/src/button";

/*useEffect 사용 이유
html랜더링 후에 동작함
자바스크립트는 위에서부터 코드를 읽기때문에 html전에 복잡한 코드가 있다면
html랜더링이 느려짐
시간이 오래 걸리는 어려운 작업,
서버에서 데이터 가져오는 작업,
타이머 장착하는 작업 은 useEffect 로 사용
* */

function ItemDetail(props) {

    // mount, update시 실행됨
    useEffect(()=>{
        console.log('실행');
    })



    let [count, setCount] = useState(0)
    let [alert, showAlert] = useState(true);

    let {id} = useParams();
    // console.log(id);
    let 찾은상품 = props.shoes.find(e=>e.id == id);

    setTimeout(()=>{showAlert(false)}, 2000);




    return (
        <div className="container">
            {/*{count}*/}
            {alert==true? <Alert/> : null}

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
        </div>
    )
}

function Alert() {
    return (
        <div className={"alert alert-warnig"}>2초이내 구매시 할인</div>
    )

}

export default ItemDetail;
