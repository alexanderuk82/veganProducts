import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { useDataContext } from './context';

function SliderMobile({ images, title }) {
  const imgData = images.data;
  const { Api_Url } = useDataContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      '(min-width: 25.5em)': {
        slides: { perView: 1, spacing: 5 },
      },
      '(min-width: 37.5em)': {
        slides: { perView: 2, spacing: 4 },
      },
      '(min-width: 75em)': {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {imgData.map((item) => {
            return (
              <div className="keen-slider__slide" key={item.id}>
                <img
                  src={`${Api_Url}${item.attributes.formats.large.url}`}
                  alt={title}
                  className="slider__image"
                />
              </div>
            );
          })}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SliderMobile;
