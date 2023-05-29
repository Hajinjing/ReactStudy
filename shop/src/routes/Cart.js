import {Table} from 'react-bootstrap'
import {useSelector} from "react-redux";
function Cart() {

    let state = useSelector((state)=>{return state}) // Redux store 가져와줌
    let cartData = useSelector((state)=>{return state.cartData}) // 원하는 부분만 골라서 올 수도 있음

    console.log(state.user)
    console.log(state.cartData)

    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{cartData[0].id}</td>
                    <td>{cartData[0].name}</td>
                    <td>{cartData[0].count}</td>
                    <td>안녕</td>
                </tr><tr>
                    <td>{cartData[1].id}</td>
                    <td>{cartData[1].name}</td>
                    <td>{cartData[1].count}</td>
                    <td>안녕</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart