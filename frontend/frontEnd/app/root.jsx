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
import styleFooter from './styles/css/footerPage.css';
import Footer from './components/footer';
import Header from './components/header';

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
        <Footer />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
