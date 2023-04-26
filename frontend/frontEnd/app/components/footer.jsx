import { Link } from '@remix-run/react';
import NewsLetter from './newsLetter';

//Create below a javascript function to get right year
function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__detail">
          <div className="footer__container__detail__links col">
            <h3 className="headingColumn">quick links</h3>

            <div className="col__link">
              <Link to="/" className="linkNav">
                About
              </Link>
              <Link to="/" className="linkNav">
                Our values
              </Link>
              <Link to="/" className="linkNav">
                Shipping & retuns
              </Link>
              <Link to="/" className="linkNav">
                FAQ
              </Link>
              <Link to="/" className="linkNav">
                Contact us
              </Link>
            </div>
          </div>
          <div className="footer__container__detail__media col">
            <h3 className="headingColumn">social media</h3>

            <div className="col__link">
              <Link to="/" className="linkNav">
                Instagram
              </Link>
              <Link to="/" className="linkNav">
                facebook
              </Link>
              <Link to="/" className="linkNav">
                twitter
              </Link>
              <Link to="/" className="linkNav">
                tikTok
              </Link>
              <Link to="/" className="linkNav">
                youtube
              </Link>
            </div>
          </div>
          <div className="footer__container__detail__info col">
            <h3 className="headingColumn">contact info</h3>
            <div className="col__link center">
              <p>Phone number: +44210 451 12</p>
              <p>email: info@thevegan.co.uk</p>
              <p>email: support@thevegan.co.uk</p>
              <p>address: 14 NA2 1FX London, UK</p>
              <p>Live-chat: Click here for support</p>
            </div>
          </div>
          <div className="footer__container__detail__news col">
            <h3 className="headingColumn">newsletter</h3>
            <div className="col__link">
              <p>
                enter your email address and submit, allowing us to receive
                regular updates, promotions, and news.
              </p>

              <form className="formNewsletter">
                <NewsLetter />
              </form>
            </div>
          </div>
        </div>
        <div className="footer__container__copyright">
          <div className="footer__container__copyright__left">
            <div className="footer__container__copyright__left--country">
              <img src="/images/pin.svg" alt="pin" />
              <p>United Kingdom</p>
            </div>
            <div className="footer__container__copyright__left--copy">
              <p>
                copyright {getYear()} and all rights reserved by{' '}
                <Link to="https://www.behance.net/alexanderburgos82">
                  Alexander
                </Link>
              </p>
            </div>
          </div>
          <div className="footer__container__copyright__right">
            <p>this UX/UI front-end project has been made from figma to react from Zero</p>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
