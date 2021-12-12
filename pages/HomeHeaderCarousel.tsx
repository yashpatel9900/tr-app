import React from 'react'
import  HomeScene  from './Home';
import { Carousel } from "react-bootstrap";

const HomeHeaderCarousel = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://trivediravi.com/wp-content/uploads/2020/04/horoscope-slider-1920x500.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://trivediravi.com/wp-content/uploads/2020/04/Ask-a-Question-slider-1920x500.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://trivediravi.com/wp-content/uploads/2020/02/slider3-1920x500.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://trivediravi.com/wp-content/uploads/2020/02/slider1-1920x500.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}

export default HomeHeaderCarousel;
