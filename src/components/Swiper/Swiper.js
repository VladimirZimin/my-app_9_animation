import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Swiper.css";

const images = [
  "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&w=960",
  "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&w=960",
  "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&w=960",
  "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&w=960",
  "https://images.pexels.com/photos/1521305/pexels-photo-1521305.jpeg?auto=compress&w=960",
];

function Swiper() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [items, setItems] = useState(images);

  const getActiveImage = () => items[activeSlideIndex];
  const showNext = () => setActiveSlideIndex(activeSlideIndex + 1);
  const showPrev = () => setActiveSlideIndex(activeSlideIndex - 1);

  const isOnFirstSlide = activeSlideIndex === 0;
  const isOnLastSlide = activeSlideIndex === items.length - 1;
  const image = getActiveImage();
  console.log("image:", image);

  return (
    <>
      <div className="Swiper-controls">
        <button onClick={showPrev} disabled={isOnFirstSlide}>
          Prev
        </button>
        <button onClick={showNext} disabled={isOnLastSlide}>
          Next
        </button>
      </div>

      <TransitionGroup className="Swiper">
        <CSSTransition key={image} timeout={250} classNames="Swiper-img">
          <img src={image} alt="cat" />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default Swiper;
