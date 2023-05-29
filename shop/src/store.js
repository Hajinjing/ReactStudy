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
        changeCount(state, action) {
            state.find(e=>e.id==action.payload).count += 1
        },
        addCart(state, action) {
            console.log(action.payload)
            state.push(action.payload)
            console.log("찾은상품 : "+state[0].title)

        }
    }
})
export let { changeCount, addCart } = cartData.actions


export default configureStore({
    reducer: {
        // 여기에 만든 state를 등록해야함
        user : user.reducer,
        stock : stock.reducer,
        cartData : cartData.reducer
    }
})