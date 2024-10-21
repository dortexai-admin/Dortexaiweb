import './mycarousel.css';
import React, { useEffect, useRef, useState } from 'react';

const MyCarousel = ({ images, autoScrollInterval = 4000 }) => {
  const carouselRef = useRef(null);
  const [carouselItems, setCarouselItems] = useState([...images, ...images]); // Initially duplicate the images

  const totalImages = images.length;

  // Function to scroll the carousel
  const scrollCarousel = (scrollAmount) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Handle infinite scroll by moving items dynamically
  const updateCarouselItems = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.offsetWidth;

      // If scrolled past half of the items, re-arrange the items
      if (scrollLeft >= (carouselItems.length / 2) * itemWidth) {
        console.warn("here");
        const updatedItems = [...carouselItems.slice(totalImages), ...carouselItems.slice(0, totalImages)];
        setCarouselItems(carouselItems);
        console.warn(`img=> ${updatedItems}`)
        carouselRef.current.scrollLeft -= totalImages * itemWidth; // Adjust the scroll position back
      }
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const autoScroll = setInterval(() => {
      scrollCarousel(800); // Scroll by 800px each time
      setTimeout(updateCarouselItems, 700); // Update items after scrolling
    }, autoScrollInterval);

    return () => clearInterval(autoScroll); // Cleanup on unmount
  }, [autoScrollInterval, carouselItems]);

  // Handle manual scrolling
  const handleWheel = (event) => {
    event.preventDefault();
    scrollCarousel(event.deltaY < 0 ? -800 : 800);
    setTimeout(updateCarouselItems, 700); // Update items after scrolling
  };

  // Manually scroll left
  const scrollLeft = () => {
    scrollCarousel(-800);
    setTimeout(updateCarouselItems, 700); // Update items after scrolling
  };

  // Manually scroll right
  const scrollRight = () => {
    scrollCarousel(800);
    setTimeout(updateCarouselItems, 700); // Update items after scrolling
  };

  return (
    <div className="carousel-container">
      <div className="arrow left" onClick={scrollLeft}>
        &#9664;
      </div>
      <div
        className="carousel"
        onWheel={handleWheel}
        ref={carouselRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {carouselItems.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={scrollRight}>
        &#9654;
      </div>
    </div>
  );
};

export default MyCarousel;