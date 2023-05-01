import { Link } from '@remix-run/react';

function Card({ item }) {
  const { title, price4Oz, url, images } = item.attributes;
  const imageUrl = images.data[0].attributes.url;
  const Api_Url = 'http://localhost:1337';
  return (
    <figure className="card">
      <div className="card__img">
        <div className="card__img__action">
          <Link to={`${url}`} className="card__image">
            <img src={`${Api_Url}${imageUrl}`} alt="" />
          </Link>
        </div>
        <div className="card__btns">
          <button className="bt bt__add">add to cart</button>
          <Link to={`${url}`} className="bt bt__view">
            View product
          </Link>
        </div>
      </div>
      <figcaption className="card__details">
        <h4 className="h4">{title}</h4>
        <div className="card__details__bottom">
          <p className="size">Size 4 Oz</p>
          <p className="price">£{price4Oz}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;
