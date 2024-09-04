import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data:[],
}
const watchedSlice = createSlice({
    name:'watchSlice',
    initialState,
    reducers:{
        watched:(state,actions)=>{
            const {id} = actions.payload
            if(!state.data.find((movie)=> movie.id === Number(id))){
                state.data = [...state.data,actions.payload]
            }
        },
        unWatched:(state,actions)=>{
            const {id} = actions.payload
            const watch = state.data.findIndex((ele)=> ele.id === Number(id))
            console.log(watch);
            state.data.splice(watch,1)
        }
    }
})
export const {watched,unWatched} = watchedSlice.actions
export default watchedSlice.reducer