import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";

export default function EmblaCarousel({ list }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {list.map((item, index) => (
            <div className="embla__slide" key={index}>
                <div
                  className="inner"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${item.bgImage})`,
                  }}
                >
                  {/* <img src={item.bgImage} alt="bgImage" /> */}
                  <div className="glass-effect">
                    <h1>{item.title}</h1>
                    <p style={{ textAlign: "center" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
        ))}
        </div>
      </div>
    </div>
  );
}
