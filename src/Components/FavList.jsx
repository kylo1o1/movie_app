import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Lists.css'

const FavList = () => {
  const favMovs = useSelector((state)=>state?.fav?.data ?? [])
  return (
    <Container className="watch-list">
    <div className="list-title">
      <h2>THe movies that you have liked</h2>
    </div>
    {favMovs.map((mov, index) => (
      <Row key={mov.id} className="movie-row">
        <Col sm={2} xs={12} className="text-center mb-3 mb-sm-0">
          <Link to={`/movieDetail/${mov.id}`} className="poster-link">
            <Image src={mov.poster} alt={mov.title} className="w-100 movie-poster" />
          </Link>
        </Col>
        <Col xs={12} sm={9} className="mov-body">
          <div className="mov-title">
            <Link to={`/movieDetail/${mov.id}`} className="movie-title-link">
              <h3>{`${index + 1}. ${mov.title}`}</h3>
            </Link>
          </div>
          <div className="number-details">
            <span>
              <span>{mov.releaseYear}</span>
              <span>{`${mov.runtime.hours}hr ${mov.runtime.minutes}min`}</span>
              <span>{mov.genre.slice(0, 2).join(" ")}</span>
            </span>
            
          </div>
          <div className="rate">
             
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      
                  </span>
                  <span>
                  {mov.rating}
                  </span>
             
            </div>
          <div className="mov-desc pe-5">
            <p>{mov.summary}</p>
          </div>
          <div className="cast-director">
            <strong>Director</strong> <Link to={`/director/${mov.director}`} className="director-link me-3"><span>{mov.director}</span></Link>
            <strong>Cast</strong> {mov.cast.slice(0, 3).map((ele, i) => (
              <span key={i} className="cast-name"> {ele.name}</span>
            ))}
          </div>
        </Col>
        <Col sm={1} xs={12} className=" mb-3 mb-sm-0">
          <Button className="info-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
            </svg>
          </Button>
        </Col>
        <Col xs={12} className="mov-details ">
         
        </Col>
      </Row>
    ))}
  </Container>
  )
}

export default FavList