import "./mycarousel.css";
import React, { useEffect, useRef, useState } from "react";

const MyCarousel = ({ images, autoScrollInterval = 2000 }) => {
    const carouselRef = useRef(null);
    const [carouselItems, setCarouselItems] = useState([...images, images[0]]); // Duplicate the first image at the end

    const scrollAmount = 600; // Reduced scroll amount for slower scrolling
    const totalImages = images.length;

    const scrollCarousel = (scrollAmount) => {
        if (carouselRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;

            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });

            // Check if we reached the duplicated last image
            if (scrollLeft + scrollAmount >= scrollWidth - clientWidth) {
                setTimeout(() => {
                    carouselRef.current.scrollTo({
                        left: 0,
                        behavior: "auto", // Jump back without smooth behavior
                    });
                }, 600); // Delay to allow the scroll to finish
            }
        }
    };

    // Auto-scroll functionality
    useEffect(() => {
        const autoScroll = setInterval(() => {
            scrollCarousel(scrollAmount);
        }, autoScrollInterval);

        return () => clearInterval(autoScroll); // Cleanup on unmount
    }, [autoScrollInterval]);

    // Handle manual scrolling
    const handleWheel = (event) => {
        event.preventDefault();
        scrollCarousel(event.deltaY < 0 ? -scrollAmount : scrollAmount);
    };

    const scrollLeft = () => {
        scrollCarousel(-scrollAmount);
    };

    const scrollRight = () => {
        scrollCarousel(scrollAmount);
    };

    return (
        <div className="carousel-container">
            <div className="arrow left" onClick={scrollLeft}>
                &#9664;
            </div>
            <div
                className="carousel"
                ref={carouselRef}
                style={{ scrollBehavior: "smooth" }}
                onWheel={handleWheel} // Uncomment if you want to enable wheel scrolling
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
