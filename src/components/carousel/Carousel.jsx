import React from 'react'
import './Carousel.scss'

function Carousel({txt}){
    return(
        <>
        <div className="carousel-item">
            <p className="txt-carousel">{txt}</p>
        </div>
        </>
    )
}

export default Carousel