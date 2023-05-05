import { Link } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { useDataContext } from './context';

function CartSlide({ toggleCart, valueQt }) {
  const { cartItems, Api_Url, updateQuantity, removeItem } = useDataContext();

  // Initialize state for the message
  const [message, setMessage] = useState('');

  // Clear the message after 2 seconds
  const displayMessage = () => {
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  // Copy the coupon code to the clipboard
  const copyCoupon = async () => {
    // Find the element containing the coupon code
    const copyText = document.querySelector(
      '.cartWindow__container__coupon--name'
    );

    // If the element is not found, show an error message and return
    if (!copyText) {
      alert('Item to copy not found');
      return;
    }

    // Get the coupon code from the 'data-value' attribute
    const couponCode = copyText.getAttribute('data-value');

    // Try to copy the coupon code to the clipboard
    try {
      await navigator.clipboard.writeText(couponCode);
      // Set the 'Copied..' message
      setMessage('Copied..');
      // Clear the message after 2 seconds
      displayMessage();
    } catch (err) {
      // Show an error message if copying fails
      alert('The text could not be copied.. Error: ' + err.message);
    }
  };

  //Update the Subtotal of our cart

  const [subtotal, setSubtotal] = useState(0); // Initialize the subtotal state

  useEffect(() => {
    const subtotal = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setSubtotal(parseFloat(subtotal.toFixed(2)));
  }, [cartItems]);

  return (
    <div className="cartWindow">
      <div className="cartWindow__container">
        {/* Title of the card */}

        <div className="cartWindow__container__header">
          <h2 className="cartWindow__title">
            your cart
            <span className="cartWindow__counter"> ({valueQt})</span>
          </h2>
          <button onClick={toggleCart} className="closeCart">
            <img src="/images/close.svg" alt="close window" />
          </button>
        </div>

        {/* Coupon code */}

        <button className="cartWindow__container__coupon" onClick={copyCoupon}>
          Don&apos;t forget to use your coupon code to get 10% off{' '}
          <span
            className="cartWindow__container__coupon--name"
            data-value="welcome10"
          >
            WELCOME10 <img src="/images/COPY.svg" alt="copy coupon" />
            {message && <span className="copyMessage">{message}</span>}
          </span>
        </button>

        {/* Items in the cart */}
        <div className="cartWindow__container__items">
          {cartItems?.length === 0
            ? 'esta vacio'
            : cartItems?.map((item) => (
                <div
                  className="cartWindow__container__items__item"
                  key={item.idSpecial}
                >
                  <div className="cartWindow__container__items__item__img">
                    <img src={`${Api_Url}${item.imageUrl}`} alt={item.title} />
                  </div>
                  <div className="cartWindow__container__items__item__info">
                    <h3 className="cartWindow__container__items__item__info--title">
                      {item.title}
                    </h3>
                    <p className="cartWindow__container__items__item__info--size">
                      size {item.size}
                    </p>
                    <select
                      className="cartWindow__container__items__item__info--quantity"
                      defaultValue={item.quantity}
                      onChange={(e) =>
                        updateQuantity({
                          idSpecial: item.idSpecial,
                          quantity: Number(e.target.value),
                        })
                      }
                    >
                      <option value="1">Qty: 1</option>
                      <option value="2">Qty: 2</option>
                      <option value="3">Qty: 3</option>
                      <option value="4">Qty: 4</option>
                      <option value="5">Qty: 5</option>
                    </select>
                    <p className="cartWindow__container__items__item__info--price">
                      £{(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>

                  <button
                    className="cartWindow__container__items__item__remove"
                    onClick={() => removeItem(item.idSpecial)}
                  >
                    <img src="/images/close.svg" alt="remove item" />
                  </button>
                </div>
              ))}
        </div>

        {/* Footer of the card */}
        <div className="cartWindow__container__footer">
          <div className="cartWindow__container__footer__subtotal">
            <h4 className="cartWindow__container__footer__subtotal--title">
              subtotal
            </h4>
            <p className="cartWindow__container__footer__subtotal--price">
              £{subtotal}
            </p>
          </div>
          <p>Shipping, taxes & discounts calculated at checkout</p>
          <Link to="/" className="btn-checkout">
            continue to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartSlide;
