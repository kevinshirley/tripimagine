import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Slide({image}) {
  return (
    <img src={image.url} alt={image.title} />
  );
}

function ImageSlider({images}) {
  const [slides] = useState(images);
  const [slide, setSlide] = useState(slides[0]);

  const prevSlide = () => {
    const newIndex = slide.index-1;
    setSlide(slides[newIndex]);
  }

  const nextSlide = () => {
    const newIndex = slide.index+1;
    setSlide(slides[newIndex]);
  }

  return (
    <div className="image-slide">
      <Slide image={slide} />
      <div className="buttons">
        <button onClick={() => prevSlide()} disabled={slide.index === 0}>
          <i className="material-icons">keyboard_arrow_left</i>
        </button>
        <button onClick={() => nextSlide()} disabled={slide.index === slides.length-1}>
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
    </div>
  )
}

ImageSlider.proptypes = {
  index: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageSlider;