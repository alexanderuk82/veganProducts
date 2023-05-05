import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import mainStyles from './styles/css/main.css';
import styleHeader from './styles/css/header.css';
import styleSearch from './styles/css/search.css';
import styleMenuSide from './styles/css/menuMobile.css';
import styleCartBtn from './styles/css/cartBtn.css';
import styleFooter from './styles/css/footerPage.css';
import Footer from './components/footer';
import Header from './components/header';
import Cart from './components/cart';
import DataContext from './components/context';
import { useState, useEffect } from 'react';

export function meta() {
  return {
    charset: 'utf-8',
    title: 'The Vegan | the best vegan products online',
    viewport: 'width=device-width,initial-scale=1',
  };
}

export function links() {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'fonts.gstatic.com',
      crossOrigin: 'true',
    },

    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
    },

    {
      rel: 'stylesheet',
      href: 'https://use.typekit.net/wqv6yvc.css',
    },
    {
      rel: 'stylesheet',
      href: mainStyles,
    },
    {
      rel: 'stylesheet',
      href: styleSearch,
    },
    {
      rel: 'stylesheet',
      href: styleHeader,
    },
    {
      rel: 'stylesheet',
      href: styleSearch,
    },
    {
      rel: 'stylesheet',
      href: styleMenuSide,
    },
    {
      rel: 'stylesheet',
      href: styleCartBtn,
    },
    {
      rel: 'stylesheet',
      href: styleFooter,
    },
  ];
}
function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Scripts />
        <Cart />
        <Footer />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  //Api Address
  const Api_Url = 'http://localhost:1337';

  //Control the open and close of the cart
  const [cart, setCart] = useState(false);
  const toggleCart = () => setCart(!cart);

  //Storage item added in the cart
  const localCart =
    typeof window !== 'undefined' && localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];

  const [cartItems, setCartItems] = useState(localCart);

  //create a local storage to save the items added in the cart
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const itemsInTheCart = cartItems.length;

  //Update quantity of items in the cart
  const updateQuantity = (cart) => {
    const newCart = cartItems.map((item) => {
      if (item.idSpecial === cart.idSpecial) {
        item.quantity = cart.quantity;
      }
      return item;
    });
    console.log(newCart);
    setCartItems(newCart);
  };

  //Remove items from cart

  const removeItem = (id) => {
    const newCart = cartItems.filter((item) => item.idSpecial !== id);
    setCartItems(newCart);
  };

  //Verify if the item is already in the cart and add it
  const addToCart = (item) => {
    const exist = cartItems.find((x) => x.url === item.url);
    if (!exist) {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <DataContext.Provider
      value={{
        valueQt: 1,
        cart,
        toggleCart,
        addToCart,
        cartItems,
        itemsInTheCart,
        Api_Url,
        updateQuantity,
        removeItem,
      }}
    >
      <Layout>
        <Outlet />
      </Layout>
    </DataContext.Provider>
  );
}
