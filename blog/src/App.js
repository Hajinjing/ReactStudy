    /*eslint-disable*/
    import logo from './logo.svg';
    import './App.css';
    import {useState} from "react";

    function App() {

    //변수와 state의 차이는? : state는 값이 변경되었을때 html이 자동 재랜더링됨, 자주 변경될 값들은 state로 만드는게 좋음

    let post = "HAZZING WORLD"; //자료를 잠깐 저장할 땐 변수를 사용
    // let [title, b] = useState('남자 코트 추천');
    // let [logo, setLogo] = useState('강남 우동맛집');
    // let [logo2, setLogo2] = useState('파이썬독학');

    let [글제목, changeTitle] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학'])

    let num = [1, 2];

    // let [a, c] = [1, 2];  //Destructing 문법
    // let a = num[0];
    // let c = num[1];
    let [like, changeLike] = useState([0,1,2]); // state를 변경하고 싶으면 state변경 함수를 사용
    let [tt, changeTt] = useState('남자코트'); // state를 변경하고 싶으면 state변경 함수를 사용

    let [modal, setModal] = useState(false); // UI의 현재 상태를 state로 저장, state조절을 통해 노출 가능

    let [title, setTitle] = useState(0);
    let [inputValue, changeValue] = useState('');

/*
* state 변경함수의 특징
* 기존state == 신규state : 변경해주지 않음
* state가 array/object면 독립적 카피본을 만들어서 수정해야함
* */
    return (
        //JSX 문법
        <div className="App">
            <div className="black-nav">
                <h4 style={{color: 'red', fontSize: '16px'}}>{post}</h4>
            </div>
            <button onClick={() => {
                let titles = [...글제목];
                titles.sort();
                changeTitle(titles);
            }}>정렬
            </button>
            <button onClick={() => {
                // 글제목[0] = '여자 코트 추천';   //원본 데이터는 보존하는게 좋음 array를 수정했지 변수에 있던 화살표는 수정되지 않음
                // let copy = 글제목; // 글제목 이라는 변수에 저장된건 ram에서 위치를 나타내는 화살표임  화살표가 똑같으니까 기존과 신규가 같아서 state 변경이 안됨
                let copy = [...글제목];  // 데이터를 복제해서 사용
                copy[0] = '여자 코트 추천';
                // changeTitle(['여자 코트 추천','강남 우동맛집','파이썬독학','여자 코트 추천']) // 이런 방식은 효율성이 떨어짐
                changeTitle(copy);
            }}>글수정
            </button>
            {/*<div className="list">*/}
            {/*    <h4>{글제목[0]} <span onClick={() => {*/}
            {/*        changeLike(like + 1)*/}
            {/*    }}>👍</span> {like} </h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{글제목[1]}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {
                글제목.map(function (a, i) {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={()=>{setModal(true); setTitle(i)}}>{ a } <span onClick={(e) => {
                                e.stopPropagation(); // 상위 html로 퍼지는 이벤트 버블링을 막기
                                let likes = [...like];
                                likes[i] = likes[i] + 1
                                changeLike(likes)
                            }}> 👍 </span> { like[i]} </h4>
                            {/*<h4>{ 글제목[i] }</h4> */}
                            <p>2월 17일 발행</p>
                        </div>
                    )
                })
            }

            <input onChange={(e)=>{
                changeValue(e.target.value);
            }}/>
            <button onClick={()=>{
                let newTitle = [...글제목];
                newTitle.unshift(inputValue) // 맨 앞에
                // newTitle.push(inputValue) // 맨 뒤에
                changeTitle(newTitle)

                let likes = [...like];
                likes.unshift(0)
                changeLike(likes)
            }}>입력</button>
            
            {
                modal == true ? <Modal color={'skyblue'} 글제목={글제목} changeTitle={changeTitle} title={title} /> : null
            }
        </div>
        );
    }

    /*
    * 컴포넌를 쓰면 좋은 상황들!
    * 반복적인 html축약할때
    * 큰 페이지들
    * 자주 변경되는 것들
    * */

    /* 부모->자식 state 전송하려면 props 문법 사용 (부모에서 자식으로만 전송 가능)
    1. <자식컴포넌트 작명={state이름}>
    2. props 파라미터 등록 후 props.작명 사용
    * */

    function Modal(props) { // 컴포넌트 생성
        return (
            <div className="modal" style={{background : props.color}}>
                <h4>{props.글제목[props.title]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={()=>{
                    let titles = [...props.글제목]
                    titles[0] = '여자 코트 추천'
                    props.changeTitle(titles)}}>글수정</button>

            </div>
        )
    }



    export default App;
