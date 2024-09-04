import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import MovieDetails from './Components/MovieDetails';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from './Redux/movieSlice';
import Movies from './Pages/Movies';
import Lists from './Pages/Lists';
import { allGenres } from './Redux/genre';

 function App() {
  const dispatch = useDispatch()
  
   useEffect(()=>{
    const getData = async ()=>{
      const res = await fetch('./mdata.json')
      const dataM = await res.json() 
      const data = dataM.movies
      console.log(data);
      const pop = data.map((ele)=> ele.genre)
      const genres=[...new Set(pop.flat())]
      dispatch(allGenres(genres))
      dispatch(getMovies(data))
      
    }
   
    getData()
   },[dispatch])

  return (
    <div >
      <Router>
      <Header/>

        <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/movieDetail/:id' element={<MovieDetails/>}/>
         <Route path='/allMovies' element = {<Movies/>}/>
         <Route path='/lists/*' element={<Lists/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
