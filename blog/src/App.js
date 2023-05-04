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

    let [글제목, b] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학'])

    let num = [1, 2];

    let [a, c] = [1, 2];  //Destructing 문법
    // let a = num[0];
    // let c = num[1];


  return (
      //JSX 문법
    <div className="App">
      <div className="black-nav">
          <h4 style={{color:'red', fontSize:'16px'}}>{ post }</h4>
      </div>
      <div className="list">
          <h4>{ 글제목[0] }</h4>
          <p>2월 17일 발행</p>
      </div><div className="list">
          <h4>{ 글제목[1] }</h4>
          <p>2월 17일 발행</p>
      </div><div className="list">
          <h4>{ 글제목[2] }</h4>
          <p>2월 17일 발행</p>
      </div>

    </div>
  );
}

export default App;
