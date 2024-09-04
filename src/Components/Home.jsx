import React, {  } from 'react'
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import './Home.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWatch, removeWatch } from '../Redux/watchListSlice'


const Home = () => {
    const movieData = useSelector((state)=>state?.movies?.data?? [])
    const wacthList = useSelector((state)=> state?.watchList?.data ?? [])
    const pop = movieData.filter((ele)=> (ele.releaseYear >= 2022))
    console.log('pop',pop);
    
    const dispatch= useDispatch()
    
  return (
  <Container fluid className='section-top bg-black p-0 pb-2  '>
    <Container fluid  className='home-carousal   '>
        <Row>
         <Col className='p-0'>
            <Carousel className='w-100 '>
                {pop.map((ele)=>(
                    <Carousel.Item className='carousal-movie' key={ele.id} >
                    <Image  src={ele.widePoster} className='w-100' alt={ele.title}/>
                    
                    <Col sm={5} className=' carousal-movie-detail p-3' >
                        <div className='d-flex c-movie-title'>
                               <h3>
                                {ele.title}
                                </h3>
                                <span className='ms-2'>
                                 ({ele.releaseYear})
                                </span>
                        </div>
                        <Row>
                        <Col sm={8} className='c-movie-details align-content-center '>
                                <p>
                                    {ele.summary}
                                </p>
                                <div className=' d-flex justify-content-between'>
                                    <div className='c-movie-links'>
                                        <Link to={ele.trailer.url}>
                                            Watch Trailer
                                        </Link> 
                                    </div>
                                    <div className='c-movie-links'>
                                       <Link to={`/movieDetail/${ele.id}`}>
                                            More Info
                                       </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col className='pe-4 '>
                                <Image src={ele.poster} alt={ele.title} className='w-100'/>
                            </Col>
                        </Row>
                        
                    </Col>
                </Carousel.Item>))}
                
            </Carousel>
         </Col>
        </Row>
    </Container>
    <Container className='new-arrivals mt-5'>
        <div className='to-watch d-flex justify-content-between'>
            <h2>
                What To Watch
            </h2>
            <div >
            <Link className='ps-4 pe-4'>
                <span>
                    Get more recommendations               
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width={20}  height={20} fill="currentColor" class="bi bi-chevron-right " viewBox="0 0 16 16">
                 <path  fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>

            </Link>
            </div>
        </div>
        <div className='top-picks mb-5'>
            <Link to={'/newArrivals'}>
            <h3 className=''>
                    Top Picks
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height={24}  fill="currentColor" class="bi bi-chevron-right ms-2" viewBox="0 0 16 16">
                 <path stroke='white' stroke-width='2' fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </h3>
            </Link>
            <span> 
            TV shows and movies just for you
            </span>
        </div>
        <Row className='mt-4 mb-3'>
           {movieData.slice(0,6).map((ele)=>(

                <Col sm={2} key={ele.id} className='movie-col'>
                  
                    <div className="bookmark-symb p-0" >
                         {wacthList.some((mav)=>mav.id === ele.id) ? (<Button onClick={()=>(dispatch(removeWatch(ele)))} className='watch-later'>
                            <svg className="bookmark check" width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="main" d="M26 2H10C8.34315 2 7 3.34315 7 5V44L18 38L29 44V5C29 3.34315 27.6569 2 26 2Z" stroke="#000000" strokeWidth="2" filter="url(#shadow)" />
                            <path d="M14 21L18 25L24 15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                            <defs>
                                <filter id="shadow" x="0" y="0" width="200%" height="200%">
                                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0, 0, 0, 0.5)" />
                                </filter>
                            </defs>
                            </svg>
                         </Button>
                   ):(<Button onClick={()=>{dispatch(addToWatch(ele))}} className='watch-later'>
                   <svg class="bookmark plus " width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path class="main" d="M26 2H10C8.34315 2 7 3.34315 7 5V44L18 38L29 44V5C29 3.34315 27.6569 2 26 2Z" stroke="#000000" stroke-width="2" filter="url(#shadow)"/>
                       <path d="M18 17V25" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                       <path d="M14 21H22" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                       <defs>
                           <filter id="shadow" x="0" y="0" width="200%" height="200%">
                           <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0, 0, 0, 0.5)"/>
                           </filter>
                       </defs>
                       </svg>
                   </Button>
                   )}
                                
                            
                        </div>
                    <Link to={`/movieDetail/${ele.id}`}>
                    <div className='new-arrivals-images'>
                        <Image
                            className='w-100'
                            src={ele.poster}
                            alt={ele.title}
                        />
                        
                    </div> 
                    <div className='new-arrivals-nameYear'>
                        <h6>
                            {ele.title}
                            <br />
                            {`(${ele.releaseYear})`}
                        </h6>
                    </div>
                    </Link>
                </Col>
           ))}
                
            
        </Row>
        <div className='watchlist mt-5 mb-5'>
            <Link to={'/newArrivals'}>
            <h3 className=''>
                    From Your Watch List
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height={24}  fill="currentColor" class="bi bi-chevron-right ms-2" viewBox="0 0 16 16">
                 <path stroke='white' stroke-width='2' fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </h3>
            </Link>
           
        </div>
        <Row className='mt-4 mb-3'>
           {wacthList.slice(0,6).map((movie)=>(
            <Col sm={2} key={movie.id}>
            <Link to={`/movieDetail/${movie.id}`}>
            <div className='new-arrivals-images' style={{ position: 'relative', display: 'inline-block' }}>
                <Image
                    className='w-100'
                    src={movie?.poster ?? ''}
                    alt={movie.title}
                />
                <Link onClick={()=>(dispatch(removeWatch(movie)))}>
                    <div className="bookmark-symb p-0" style={{ position: 'absolute', top: '0px', left : '0px' }}>
                    <svg class="bookmark" width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
                        <polygon class="bkmrk-polygon" fill="#ffffff" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                        <polygon class="bkmrk-polygon1" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                        <polygon class="bkmrk-polygon2" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
                    </svg>
                    <div class="plus-icon" role="presentation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="#fffff" role="presentation">
                                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='new-arrivals-nameYear'>
                    <h6>
                        {movie.title}
                        <br />
                        {movie.releaseYear}
                    </h6>
                </div>
            </Link>
            </Col>
           ))} 
                
           
        </Row>
      
    </Container>
  </Container>
)
}

export default Home