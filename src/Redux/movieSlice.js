import { createSlice } from "@reduxjs/toolkit"

 

const initialState = {
    data:[]
}

const movieSlice = createSlice({
    name : 'movieSlice',
    initialState,
    reducers:{
        getMovies:(state,actions)=>{
            state.data = actions.payload
        }
    }
})

export const {getMovies} = movieSlice.actions
export default movieSlice.reducer