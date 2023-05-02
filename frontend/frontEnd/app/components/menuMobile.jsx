import { Link } from '@remix-run/react';
import { useState } from 'react';

function MenuMobile({ toggleMenuMobile, location }) {

  return (
    <div className="menuMobile" onClick={toggleMenuMobile}>
      <div
        className={`menuMobile__container ${
          toggleMenuMobile && 'menuContainerActive'
        }`}
      >
        <nav className="menuMobile__container__menu">
          <ul className="menuMobile__container__menu__links">
            <li
              className={
                location.pathname === '/shop/moistures'
                  ? 'menuMobile__container__menu__links__item mobileActiveLink'
                  : 'menuMobile__container__menu__links__item'
              }
            >
              <Link to="/shop/moistures" className="mobileLink">
                body moistures
              </Link>
            </li>
            <li
              className={
                location.pathname === '/shop/exfoliants'
                  ? 'menuMobile__container__menu__links__item mobileActiveLink'
                  : 'menuMobile__container__menu__links__item'
              }
            >
              <Link to="/shop/exfoliants" className="mobileLink">
                body exfoliants
              </Link>
            </li>
            <li
              className={
                location.pathname === '/shop/facials'
                  ? 'menuMobile__container__menu__links__item mobileActiveLink'
                  : 'menuMobile__container__menu__links__item'
              }
            >
              <Link to="/shop/facials" className="mobileLink">
                facial mist
              </Link>
            </li>
            <li
              className={
                location.pathname === '/shop'
                  ? 'menuMobile__container__menu__links__item mobileActiveLink'
                  : 'menuMobile__container__menu__links__item'
              }
            >
              <Link to="/shop" className="mobileLink">
                Shop
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link to="/" className="logoMobile">
        <img src="/images/logoMobile.svg" alt="logo" />
      </Link>
    </div>
  );
}

export default MenuMobile;
