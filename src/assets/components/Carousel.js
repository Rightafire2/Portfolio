import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import '../styling/carousel.css'

function PortfolioImages({ carouselPages }) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselPages?.map((page) => (
        <Carousel.Item key={page.image} interval={page.interval}>
          <img
            className='d-block w-100'
            width={900}
            height={500}
            src={page.image}
            alt={page.title}
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3><a href={page.href} style={{ textDecoration: 'none', color: 'inherit' }}>{page.title}</a></h3>
            <p>{page.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default PortfolioImages;
