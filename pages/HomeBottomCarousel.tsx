import React from "react";
import HomeScene from "./Home";
import { Carousel } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const handleDragStart = (e) => e.preventDefault();
const Item = ({ image, title }) => (
  <>
    <img
      onDragStart={handleDragStart}
      role="presentation"
      src={image}
      alt={title}
    />
    <div
      style={{ color: "white", backgroundColor: "black" , padding:"1rem"}}
      className="p-10 m-10 text-center"
    >
      <strong>{title}</strong>
    </div>
  </>
);


const HomeBottomCarousel = () => {
  return (
      <AliceCarousel
        autoWidth
        touchTracking
        mouseTracking
        infinite={false}
        responsive={responsive}
      >
        <Item
          title="CAREER GUIDELINES"
          image="https://trivediravi.com/wp-content/uploads/2020/04/career-home.png"
        />
        <Item
          title="HOROSCOPE"
          image="https://trivediravi.com/wp-content/uploads/2020/04/horoscope-home.png"
        />
        <Item
          title="CORPORATE ASTRO VASTU"
          image="https://trivediravi.com/wp-content/uploads/2020/04/office-vastu-home.png"
        />
        <Item
          title="NUMEROLOGY"
          image="https://trivediravi.com/wp-content/uploads/2020/04/numerology-home.png"
        />
        <Item
          title="COMMERCIAL VASTU"
          image="https://trivediravi.com/wp-content/uploads/2020/04/vastu-home.png"
        />
      </AliceCarousel>
  );
};

export default HomeBottomCarousel;
