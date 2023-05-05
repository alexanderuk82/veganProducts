import CartSlide from './cartSlide';
import { useDataContext } from './context';

function Cart() {
  const { itemsInTheCart, cart, toggleCart } = useDataContext();

  return (
    <>
      <button className="cartBtn" onClick={toggleCart}>
        <img src="/images/cartBtn.svg" alt="cart Button" />
        <div className="cartBtn__counter">
          <p>{itemsInTheCart}</p>
        </div>
      </button>
      {cart && <CartSlide toggleCart={toggleCart} valueQt={itemsInTheCart} />}
    </>
  );
}

export default Cart;
