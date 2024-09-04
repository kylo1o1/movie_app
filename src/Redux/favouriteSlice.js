import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    data:[],
}

const favSlice = createSlice({
    name:'favSlice',
    initialState,
    reducers:{
        addToFav:(state,actions)=>{
            const {id} = actions.payload
            if(!state.data.find((ele)=>ele.id === Number(id))){
                state.data = [...state.data,actions.payload]
            }
        },
        remFromFav:(state,actions)=>{
            const {id} = actions.payload
            const watch = state.data.findIndex((ele)=> ele.id === Number(id))
            console.log(watch);
            state.data.splice(watch,1)
        }
    }
})
export const {addToFav,remFromFav} = favSlice.actions
export default favSlice.reducer