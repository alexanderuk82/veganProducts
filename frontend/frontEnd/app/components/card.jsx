import { Link } from '@remix-run/react';
import { useDataContext } from './context';

function Card({ item }) {
  const { addToCart, toggleCart, Api_Url } = useDataContext();

  const idSpecial = () => Math.floor(Math.random() * 1000) + 4896212;

  const { title, url, images, categories, datasize } = item.attributes;
  const imageUrl = images.data[0].attributes.url;

  const { small } = datasize;

  const handleAddToCart = () => {
    const itemChoose = {
      id: item.id,
      idSpecial: idSpecial(),
      title,
      price: small.price,
      url,
      imageUrl,
      categories,
      size: small.size,
      quantity: 1,
    };

    addToCart(itemChoose);
    toggleCart();
  };
  return (
    <figure className="card">
      <div className="card__img">
        <div className="card__img__action">
          <Link to={`${url}`} className="card__image">
            <img src={`${Api_Url}${imageUrl}`} alt="" />
          </Link>
        </div>
        <div className="card__btns">
          <button className="bt bt__add" onClick={handleAddToCart}>
            add to cart
          </button>
          <Link to={`${url}`} className="bt bt__view">
            View options
          </Link>
        </div>
      </div>
      <figcaption className="card__details">
        <h4 className="h4">{title}</h4>
        <div className="card__details__bottom">
          <p className="size">Size {small.size}</p>
          <p className="price">£{small.price}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;
