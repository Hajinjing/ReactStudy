import {useParams} from "react-router-dom";
import styled from 'styled-components'

let YellowBtn = styled.button`
  background: ${ props => props.bg };
  color: ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding: 10px;
`
let Box = styled.div`
  background: grey;
  padding: 20px;
`

function ItemDetail(props) {
    useParams();

    let {id} = useParams();
    // console.log(id);
    let 찾은상품 = props.shoes.find(e=>e.id == id);

    return (
        <div className="container">
            <YellowBtn bg={"blue"}>버튼</YellowBtn>
            <YellowBtn bg={"yellow"}>버튼</YellowBtn>
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

export default ItemDetail;
