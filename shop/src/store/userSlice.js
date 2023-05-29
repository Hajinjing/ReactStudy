import {createSlice} from '@reduxjs/toolkit'

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

// state가 array/object인 경우
let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },
    reducers : {
        // state변경함수를 action이라고 함
        changeName(state){
            // return { name : 'park', age : 20 }
            state.name = 'park'
        },
        changeAge(state, action) {
            state.age += action.payload
        },
    }
})

export let { changeName, changeAge } = user.actions


export default user
