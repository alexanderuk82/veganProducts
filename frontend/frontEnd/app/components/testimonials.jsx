import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

function Testimonials() {
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
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <figure className="keen-slider__slide testimonials__item">
            <article className="testimonials__item--text">
              <img src="/images/quote.svg" alt="quote testimonials" />
              <h4>
                I absolutely love the Revitalizing Vegan Body Butter! It leaves
                my skin feeling incredibly soft and hydrated after a long day of
                teaching yoga classes. The calming lavender scent is an added
                bonus that helps me unwind. I'm so glad I found this
                eco-friendly brand!
              </h4>
            </article>
            <figcaption className="testimonials__item--user">
              <h5>Review by Sarah, Yoga Instructor</h5>
              <img src="/images/user.svg" alt="user testimonial" className='imageUser' />
              <img src="/images/starReview.svg" alt="star-reviews"
              className='imageStar' />
            </figcaption>
          </figure>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
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

export default Testimonials;

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
