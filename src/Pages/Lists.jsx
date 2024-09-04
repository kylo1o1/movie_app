import React from 'react'
import { Container } from 'react-bootstrap'
import './List.css'
import { Route, Routes } from 'react-router-dom'
import Watchlist from '../Components/Watchlist'
import WatchedList from '../Components/WatchedList'
import FavList from '../Components/FavList'
const Lists = () => {
  return (
    <Container fluid className='wrapper-list'>
            <Routes>
                <Route path='/watchList' element={<Watchlist/>}/>
                <Route path='/favList' element ={<FavList/>}/>
                <Route path='/watchedList' element={<WatchedList/>}/>
            </Routes>
    </Container>
)
}

export default Lists