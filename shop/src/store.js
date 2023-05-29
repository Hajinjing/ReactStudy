import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from './store/userSlice'
// let user = createSlice({
//     name : 'user',
//     initialState : 'kim',
//     reducers : {
//         changeName(state){
//             return 'john ' + state
//         },
//         dd(){
//             return null
//         }
//     }
// })

// state변경함수 만들기 -> export -> import


// state변경 함수 export

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let cartData = createSlice({
    name : 'cartData',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        upCount(state, action) {
            state.find(e=>e.id==action.payload).count++
            // let = 번호 state.findIndex((a)=>{return a.id == action.payload})
            // state[번호].count++
        },
        downCount(state, action) {
            if (state[action.payload].count > 1){
                state.find(e=>e.id==action.payload).count--
            } else {
                alert("수량이 1개인 상품입니다, 장바구니에서 삭제하시겠습니까?")
            }
        },
        addItem(state, action) {
            console.log("진입 : " + state.findIndex((a)=>{return a.id==action.payload.id}))
            if(state.findIndex((a)=>{return a.id==action.payload.id}) < 0) {
                state.push(action.payload)
            } else {
                console.log("수량을 추가합니다.", action.payload.id)
                state.find(e=>e.id==action.payload.id).count++
                // upCount(action.payload.id)
            }

            // if ()
            // state.push(action.payload)
        },
        removeItem(state, action) {
            let 번호 = state.findIndex((a)=>{return a.id == action.payload})
            state.splice(번호,1)
        }

    }
})
export let { upCount,downCount, addItem, removeItem } = cartData.actions


export default configureStore({
    reducer: {
        // 여기에 만든 state를 등록해야함
        user : user.reducer,
        stock : stock.reducer,
        cartData : cartData.reducer
    }
})