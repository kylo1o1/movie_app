import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './AllMovies.css'
import { Link, } from 'react-router-dom'
import { addToWatch } from '../Redux/watchListSlice'
import { addToFav } from '../Redux/favouriteSlice'
import GenreSelect from './GenreSelect'
const AllMovies = () => {
    const movies = useSelector((state)=>state?.movies?.data ?? [])
    const sortBy= useSelector((state)=>state?.gens?.selectedGenre ??[])
    console.log('',sortBy);
    const filterMovies = movies.filter((ele)=> ele.genre.some((g)=> sortBy.includes(g)))
    console.log('pop',filterMovies);
    
    
    const dispatch = useDispatch()
  return (
   <Container fluid className='wrapper-movie pt-3'>
     <Container>
        <div className='page-title'>
            <h2>
                Discover Your Next Favorite Movie
            </h2>
        </div>
        
        <Row>
            <Col>
                <GenreSelect/>
            </Col>
            <Col sm={10} className='d-flex movs '>  
                <Row>
            { sortBy.length === 0 ? (movies.map((mov)=>(               
                 <Col sm={3} key={mov.id} className='movies'>
                    <div className=''>
                        <Link to={`/movieDetail/${mov.id}`}>
                            <Image src={mov.poster} alt={mov.title} className='movie-poster w-100'/>
                        </Link>
                    </div>
                    <div className='title-year w-100'>
                        <h6>
                            {mov.title}
                        </h6>
                        <span>{mov.releaseYear}</span>
                        <div className='mt-3 symbols '>
                                <Button as={Link} className='no-style' to={`/movieDetail/${mov.id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28"  fill="currentColor" class="bi bi-info-square-fill" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                    </svg>
                                </Button>
                                <Button className='no-style' onClick={()=>(dispatch(addToWatch(mov)))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28"  fill="currentColor" class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"/>
                                </svg>
                                </Button>
                                <Button className='no-style' onClick={()=>(dispatch(addToFav(mov)))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                </svg>
                                </Button>
                        </div>
                    </div>
                </Col>))):(filterMovies.map((mov)=>(
                                    <Col sm={3} key={mov.id} className='movies'>
                                    <div className=''>
                                        <Link to={`/movieDetail/${mov.id}`}>
                                            <Image src={mov.poster} alt={mov.title} className='movie-poster w-100'/>
                                        </Link>
                                    </div>
                                    <div className='title-year w-100'>
                                        <h6>
                                            {mov.title}
                                        </h6>
                                        <span>{mov.releaseYear}</span>
                                        <div className='mt-3 symbols '>
                                                <Button as={Link} className='no-style' to={`/movieDetail/${mov.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28"  fill="currentColor" class="bi bi-info-square-fill" viewBox="0 0 16 16">
                                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                                    </svg>
                                                </Button>
                                                <Button className='no-style' onClick={()=>(dispatch(addToWatch(mov)))}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28"  fill="currentColor" class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                                                     <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"/>
                                                </svg>
                                                </Button>
                                                <Button className='no-style' onClick={()=>(dispatch(addToFav(mov)))}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                                </svg>
                                                </Button>
                                        </div>
                                    </div>
                                </Col>
                )))}
  
            </Row>
            </Col>
        </Row>
    </Container>
   </Container>
  )
}

export default AllMovies