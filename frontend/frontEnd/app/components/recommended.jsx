import { Link } from '@remix-run/react';
import Slider from './slider';


function Recommended({ recommended }) {
  return (
    <section className="recommended">
      <div className="main__products__title">
        <h2 className="h2">products recommended</h2>
        <Link to="/shop">view all</Link>
      </div>
      <div className="recommended__container">
        <Slider recommended={recommended} />
      </div>
    </section>
  );
}

export default Recommended;
