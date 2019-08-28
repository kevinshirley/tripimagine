import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shuffle from '../common/shuffle-array';

function ImageSlide({image}) {
  return (
    <img src={image.url} alt={image.title} />
  );
}

function VideoSlide({video, poster}) {
  return (
    <video controls loop poster={poster}>
      <source src={video.url} type={video.contentType} />
      <source src={video.url} type={video.contentType} />
      Your browser does not support HTML5 video.
    </video>
  );
}

function MediaSlider({images}) {
  const [slides] = useState(images);
  const [shuffledSlides] = useState(slides);
  const [slide, setSlide] = useState(slides[0]);

  const prevSlide = () => {
    const newIndex = slide.index-1;
    setSlide(slides[newIndex]);
  }

  const nextSlide = () => {
    const newIndex = slide.index+1;
    setSlide(slides[newIndex]);
  }

  const getVideoPoster = slides => {
    const newSlides = [...slides];
    const slidesShuffled = shuffle(newSlides);
    const posterObj = slidesShuffled.find(obj => obj.contentType.includes('image'));
    return posterObj.url;
  }

  const videoPoster = getVideoPoster(shuffledSlides);

  return (
    <div className="image-slide">
      {slide && slide.contentType.includes('video') ? <VideoSlide video={slide} poster={videoPoster} /> : <ImageSlide image={slide} />}
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