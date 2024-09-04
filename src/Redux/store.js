import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import watchListSlice from "./watchListSlice";
import watchedSlice from "./watchedSlice";
import favouriteSlice from "./favouriteSlice";
import genre from "./genre";


const store = configureStore({
    reducer:{
        movies:movieSlice,
        watchList:watchListSlice,
        watched:watchedSlice,
        fav:favouriteSlice,
        gens:genre,
    }
})
export default store