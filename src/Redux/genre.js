import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genre:[],
    selectedGenre:[]
}

const genreSlice = createSlice(({
    name:'genreSlice',
    initialState,
    reducers:{
        allGenres:(state,actions)=>{

            
    //         const newSelectedGenres = selectedGenres.includes(genre)
    //   ? selectedGenres.filter((g) => g !== genre)
    //   : [...selectedGenres, genre];
            state.genre = actions.payload
        },
        genreSelected:(state,actions)=>{
            const newGenre = actions.payload
            const genres = state.selectedGenre
            state.selectedGenre = genres.includes(newGenre) ? genres.filter((ele)=> ele !== newGenre) : [...genres,newGenre]
        }
    }


}))

export const {allGenres,genreSelected} = genreSlice.actions
export default genreSlice.reducer