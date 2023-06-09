import {Table} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {changeAge, changeName} from "./../store/userSlice";
import {upCount, downCount, removeItem} from "../store";
function Cart() {

    let state = useSelector((state)=>{return state}) // Redux store 가져와줌
    let cart = useSelector((state)=>{return state.cartData}) // 원하는 부분만 골라서 올 수도 있음
    let dispatch = useDispatch() // store.js로 요청보내주는 함수

    // console.log(state.user)
    // console.log(state.cartData)

    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>{dispatch(changeAge(100))}}>버튼</button>
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
                {
                    cart.map((a, i)=>{
                        return (
                            <tr key={i}>
                                <td>{cart[i].id}</td>
                                <td>{cart[i].name}</td>
                                <td>{cart[i].count}</td>
                                <td>
                                    <button onClick={()=>{dispatch(downCount(cart[i].id))}}>-</button>
                                    <button onClick={()=>{
                                    dispatch(changeName())
                                    dispatch(upCount(cart[i].id))
                                }}>+</button>
                                    <button onClick={()=>{dispatch(removeItem(cart[i].id))}}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        )

                    })
                }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart