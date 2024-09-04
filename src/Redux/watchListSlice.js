import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    data : [],
}

const watchListSlice = createSlice({
    name : 'watchList',
    initialState,
    reducers:{
        addToWatch:(state,actions)=>{
            const {id} = actions.payload;
            console.log(actions.payload);
            console.log(id);
            if(!state.data.find((ele)=> ele.id === Number(id)))
                {
                     state.data = [...state.data,actions.payload]
                }
        },
        removeWatch:(state,actions)=>{
            const {id} = actions.payload
            const watch = state.data.findIndex((ele)=> ele.id === Number(id))
            console.log(watch);
            state.data.splice(watch,1)
        }
    }
})
export const {addToWatch ,removeWatch} = watchListSlice.actions
export default watchListSlice.reducer