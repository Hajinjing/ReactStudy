import {configureStore, createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state){
            return 'john ' + state
        },
        dd(){
            return null
        }
    }
})

// state변경 함수 export
export let { changeName, dd } = user.actions

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
        changeCount(state) {
            return state+1
        }
    }
})

export default configureStore({
    reducer: {
        // 여기에 만든 state를 등록해야함
        user : user.reducer,
        stock : stock.reducer,
        cartData : cartData.reducer
    }
})