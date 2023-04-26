import { Link, useLocation } from '@remix-run/react';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__Topcontainer">
        <p>free delivery above £30 all uk</p>
        <div className="header__Topcontainer__actions">
          <div className="header__Topcontainer__actions__account">
            <Link to="/">
              <img src="/images/account.svg" alt="my account" />
            </Link>
            <p className="header__Topcontainer__actions__account--text">
              my account
            </p>
          </div>
          <div className="header__Topcontainer__actions__account">
            <img src="/images/whishWhite.svg" alt="whislist" />
            <p className="header__Topcontainer__actions__account--text">
              whislist
            </p>
          </div>
        </div>
      </div>

      <div className="header__nav">
        <Link to="/" className="logo">
          <img src="/images/logoMobile.svg" alt="logo" />
        </Link>

        <ul className="header__nav__links">
          <li
            className={
              location.pathname === '/shop/moistures'
                ? 'header__nav__links__item activeLink'
                : 'header__nav__links__item'
            }
          >
            <Link to="/shop/moistures" className="link">
              body moistures
            </Link>
          </li>
          <li
            className={
              location.pathname === '/shop/exfoliants'
                ? 'header__nav__links__item activeLink'
                : 'header__nav__links__item'
            }
          >
            <Link to="/shop/exfoliants" className="link">
              body exfoliants
            </Link>
          </li>
          <li
            className={
              location.pathname === '/shop/facials'
                ? 'header__nav__links__item activeLink'
                : 'header__nav__links__item'
            }
          >
            <Link to="/shop/facials" className="link">
              facial mist
            </Link>
          </li>
          <li
            className={
              location.pathname === '/shop'
                ? 'header__nav__links__item activeLink'
                : 'header__nav__links__item'
            }
          >
            <Link to="/shop" className="link">
              Shop
            </Link>
          </li>
        </ul>

        <div className="header__nav__search--desktop">
          <button type="submit">
            <img src="/images/search.svg" alt="search" />
          </button>
          <input type="text" placeholder="search any product or name" />
        </div>

        <div className="header__nav__search--mobile">
          <button type="submit">
            <img src="/images/search.svg" alt="search" />
          </button>
        </div>

        <button className="header__nav__menuMobile">
          <img src="/images/menu.svg" alt="menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;
