import React, {useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'

export default function SlideShow( {slides} ) {
  useEffect(() => {
  }, [slides])

  return (
    <div>
      { slides && 
        <div id="HomeSlideShow" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {slides && slides.map((item,i) =>
              <li data-target="#HomeSlideShow" data-slide-to={i} className={ i === 0 && "active"}></li>
            )}
          </ol>
          <div className="carousel-inner">
            {slides && slides.map((item,i) =>
              <div className={ i === 0 ? "carousel-item active" : "carousel-item"}>
                <img className="d-block w-100" style={{height:"500px"}} src={item.image && `http://localhost:3000/images/advertisement/${item.image}`} alt={"Slide " + i}/>
              </div>
            )}
          </div>
          <a className="carousel-control-prev" href="#HomeSlideShow" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#HomeSlideShow" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      }
    </div>
  )
}
