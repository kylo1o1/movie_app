import React, { useState } from 'react'
import { Button, Col, Container, Dropdown, Image, Row } from 'react-bootstrap'
import './MovieDetails.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWatch, removeWatch } from '../Redux/watchListSlice'
import { unWatched, watched } from '../Redux/watchedSlice'

const MovieDetails = () => {
    const {id} = useParams()
    const movieData = useSelector((state)=> state?.movies?.data ?? [])
    const watchList = useSelector((state)=> state?.watchList?.data ?? [])
    const seenMovie = useSelector((state)=> state?.watched?.data ?? [])
    const thisMovie = movieData.find((ele)=> ele.id === Number(id))
    console.log(thisMovie);
    const dispatch = useDispatch()
   
    

  return (
   <Container fluid className='wrapper  p-0'>
    <Container  className='movie-content pt-5'>
       <Row className='gap-0 gap-4 mb-5'>
        <Col sm={3} className='movie-image'>
            <Image src={thisMovie.poster} fluid className='w-100'/>
        </Col>

        <Col sm={5} className='movie-details'>
            <Row>
                <Col sm={9} className=''>
                        <div className='d-flex p-0 m-title'>
                            <h4>
                                {thisMovie.title}
                            </h4>
                            <span className='ms-3 movie-year'>
                                {thisMovie.releaseYear}
                            </span>
                        </div>
                        <div className='d-flex '>
                            <div className='d-flex p-2 movie-rating'> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                     </svg>
                                    <h5 className='ms-2'>
                                    
                                        {thisMovie.rating}
                                    </h5>
                            </div>
                            <div className='ms-3 ps-0 w-100 movie-genre-runtime'>
                                <div className='movie-genre'>
                                {thisMovie?.genre.map((ele, index) => (
                                    <React.Fragment key={index}>
                                        <span>{ele}</span>
                                        {index < thisMovie.genre.length - 1 && <span> | </span>}
                                    </React.Fragment>
                                    ))}
                                </div>
                                <div>
                                    <span>{`${thisMovie?.runtime?.hours?? ''}hr ${thisMovie?.runtime?.minutes ?? ''}min`}</span>
                                </div>
                            </div>
                        </div>


                </Col>
                <Col sm={2}  className='d-flex share-save '>
                        <div className='share ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25"  fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                        </div>
                        <div className='save'>
                        {watchList.some((mov)=> mov.id === thisMovie.id)?(
                            <Button className='no-style'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="25"  fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                                    </svg>
                            </Button>):(<svg xmlns="http://www.w3.org/2000/svg" width="25"  fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                            </svg>)}
                        </div>
                </Col>
            </Row>
            <div className='mt-4 pb-3 movie-desc'>
               
                <p className='mt-3 mb-3'>
                    {thisMovie.summary}
                </p>
                <p className='movie-cast-director'>
                   <span>Director</span> : <Link>{thisMovie?.director??''}</Link><br />
                    <span>Stars</span> : {thisMovie?.cast.slice(0,2).map((ele,index)=>(
                         <React.Fragment key={index}>
                         <span className='frags'>{ele.name}</span>
                         {index < thisMovie.cast.slice(0,2).length-1  && <span className='frags'>,</span>}
                     </React.Fragment>
                    ))}
                </p>
                <Link>
                    <strong>
                        See  Cast  {`>>`}
                    </strong>
                </Link>
            </div>
            <div className='pt-3 d-flex  gap-3'>
                <Col sm={6} className=''>
                    {seenMovie.some((mov)=>mov.id === thisMovie.id)?(
                         <Button type='button' variant="dark" className='w-100' onClick={()=>(dispatch(unWatched(thisMovie)))}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                            Remove From Watched 
                         </Button>
                    ):(<Button type='button' variant="dark" className='w-100' onClick={()=>(dispatch(watched(thisMovie)))}>
                        
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                 </svg>
                Mark as Watched
                 </Button>)}
                    
                    
                    
               </Col>
                <Col>
                <Dropdown className=' w-100'>
                    <Dropdown.Toggle variant="dark" id="dropdown-button-drop-end" drop={'end'} className='w-100'>
                        Watch
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {thisMovie.watchOptions.map((ele,index)=>(
                            <Dropdown.Item key={index} as={Link} to={`${ele.url}`}>{ele.platform}</Dropdown.Item>
                        ))}
                        
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </div>
        </Col>
        <Col className='movie-awards mt-sm-2'>
            <div className='award-list'>
                <h4>
                    Awards
                </h4>
                {Object.keys(thisMovie.awardsAndNominations).slice(0,1).map(awardType => (
            <div key={awardType}>
                <h5>{awardType}</h5>
                <div>
                    <strong>Won:</strong>
                    <ul className='mb-2' style={ { listStyleType: 'none', paddingLeft: '0' }}>
                        {thisMovie.awardsAndNominations[awardType].won.length === 0 
                            ? <li>No awards won</li> 
                            : thisMovie.awardsAndNominations[awardType].won.map((award, index) => (
                                <li key={index}>{award.category} - {award.recipient}</li>
                            ))}
                    </ul>
                    <strong>Nominated:</strong>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        {thisMovie.awardsAndNominations[awardType].nominated.map((award, index) => (
                            <li className='mb-2' key={index}>{award.category} - {award.recipient}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
            </div>
        </Col>
       </Row>
       <div className='mt-5 mb-5 movie-trailer'>
            <h4>
                Trailer
            </h4>
       </div>
       <Row className='trailer-fic'>
        <Col className='movie-trailer-iframe'>
            <iframe className='w-100' src={thisMovie?.trailer?.url?? ''} title="The Shawshank Redemption - Trailer - (1994) - HQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
        <Col sm={3} className='movie-trailer-desc'>
            <h6>
                {thisMovie.title}
            </h6>
            <p>
            {thisMovie?.genre.map((ele, index) => (
                                    <React.Fragment key={index}>
                                        <span>{ele}</span>
                                        {index < thisMovie.genre.length - 1 && <span> | </span>}
                                    </React.Fragment>
                                    ))}
            </p>
            <p>
                {thisMovie?.trailer?.description?? ''}
            </p>
        </Col>
       </Row>
       <div className='mt-4 mb-2'>
        <h3>
            Cast
        </h3>
       </div>
        <Col xs={12} sm={4}>
        {thisMovie.cast.map((ele,index)=>(
            <Row key={index} className="align-items-center my-2  cast-rows">
            <Col xs={2} className='p-0 name-role'>
              <img
                src={ele.photo}
                alt={ele.name}
                className="img-fluid actor-image"
              />
            </Col>
            <Col xs={5} className='name-role'>
              <strong>{ele.name}</strong>
            </Col>
            <Col xs={5} className="cast-role name-role">
              {ele.role}
            </Col>
          </Row>
        ))}
       </Col>
       <div className='mt-4  mb-3'>
        <h4>
            Storyline
        </h4>
       </div>
       <Row className='mt-4 gap-3 mb-5'>
        <Col className='storyline' sm={8}>
            <p>
                {thisMovie.summary}
            </p>
        </Col>
        <Col className='plot-keywords'>
            <h5>
                Plot Keywords
            </h5>
            <p>
            {thisMovie?.plotKeywords.map((ele,index)=>(
                <React.Fragment key={index}>
                    <span>{ele}</span>
                    {index < thisMovie.plotKeywords.length - 1 && <span> | </span>}
                </React.Fragment>
            ))}
            </p>
        </Col>
       </Row>
    </Container>
    
   </Container>
  )
}

export default MovieDetails