import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ImageSlide({image}) {
  return (
    <img src={image.url} alt={image.title} />
  );
}

function VideoSlide({video}) {
  return (
    <video controls loop>
      <source src={video.url} type={video.contentType} />
      <source src={video.url} type={video.contentType} />
      Your browser does not support HTML5 video.
    </video>
  );
}

function MediaSlider({images}) {
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
      {slide && slide.contentType.includes('video') ? <VideoSlide video={slide} /> : <ImageSlide image={slide} />}
      <div className="buttons">
        <button onClick={() => prevSlide()} disabled={slide.index === 0}>
          <i className="material-icons">keyboard_arrow_left</i>
        </button>
        <button onClick={() => nextSlide()} disabled={slide.index === slides.length-1}>
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
      <div>{slide.index+1} / {slides.length}</div>
    </div>
  )
}

MediaSlider.proptypes = {
  index: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default MediaSlider;