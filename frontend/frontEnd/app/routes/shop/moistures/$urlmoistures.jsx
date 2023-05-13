import { Link, useLoaderData } from '@remix-run/react';
import { getMoistureItem } from '../../../models/moistures.server';
import styleProductPage from '~/styles/css/productPage.css';
import styleBreadCrumb from '~/styles/css/breadcrumb.css';
import styleSlider from '~/styles/css/slider.css';
import styleAccordion from '~/styles/css/accordion.css';
import styleRecommended from '~/styles/css/recommended.css';
import BreadCrumb from '../../../components/breadCrumb';
import TitleProduct from '../../../components/titleProduct';
import SliderMobile from '../../../components/sliderMobile';
import Accordion from '../../../components/accordion';
import { useState } from 'react';
import { useDataContext } from '../../../components/context';
import { idSpecial } from '../../../helpers';
import Recommended from '../../../components/recommended';

export async function loader({ params }) {
  const { urlmoistures } = params;
  const item = await getMoistureItem({ url: urlmoistures });
  return item.data;
}
export function meta({ data }) {
  const { title, longDescription } = data[0].attributes;

  return {
    title: `Shop - ${title}`,
    description: `${longDescription}`,
  };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styleProductPage,
    },
    {
      rel: 'stylesheet',
      href: styleBreadCrumb,
    },
    {
      rel: 'stylesheet',
      href: styleSlider,
    },
    {
      rel: 'stylesheet',
      href: styleAccordion,
    },
    {
      rel: 'stylesheet',
      href: styleRecommended,
    },
  ];
}

function Moistures() {
  const { addToCart, toggleCart, Api_Url, recommended } = useDataContext();

  //Loading data from API
  const item = useLoaderData();
  const {
    title,
    shortDescription,
    reviewStar,
    longDescription,
    images,
    benefits,
    ingredients,
    howToUse,
    datasize,
    categories,
    url,
  } = item[0].attributes;

  //Selecting the first image to show in the cart image
  const imageUrl = images.data[0].attributes.formats.medium.url;
  //control price buttons selected

  const [priceItem, setSelectedPriceItem] = useState(0);
  const [sizeProduct, setSizeProduct] = useState('');

  const handlePriceClick = (e) => {
    const priceSelected = Number(e.target.value);

    setSelectedPriceItem(priceSelected);
    setSizeProduct(e.target.dataset.size);

    //inserting active class to the button selected

    const buttons = document.querySelectorAll(
      '.product__container__info__prices--btnPrice'
    );
    buttons.forEach((btn) => btn.classList.remove('activePrice'));
    e.target.classList.add('activePrice');
  };

  //Adding to the cart the item selected

  const handleAddToCart = () => {
    const itemChoose = {
      idSpecial: idSpecial(),
      url,
      title,
      price: priceItem,
      categories,
      size: sizeProduct,
      quantity: 1,
      imageUrl,
    };

    addToCart(itemChoose);
    toggleCart();
  };

  return (
    <main className="product">
      <BreadCrumb title={title} category={categories} />
      <section className="product__container">
        <div className="product__container__mobile">
          <TitleProduct
            view="mobile"
            title={title}
            shortDescription={shortDescription}
            reviewStar={reviewStar}
          />
          <section className="product__container__mobile__slider">
            <SliderMobile images={images} title={title} />
          </section>
        </div>
        <aside className="product__container__images desktop">
          <div className="product__container__images--mainImg">
            <img src={`${Api_Url}${imageUrl}`} alt="" />
          </div>
          <div className="product__container__images--normal">
            {images.data.map((item, index) => {
              // we skip the first image (index 0)
              if (index === 0) {
                return null;
              }
              return (
                <img
                  src={`${Api_Url}${item.attributes.formats.large.url}`}
                  alt={title}
                  className="slider__image"
                  key={item.id}
                />
              );
            })}
          </div>
        </aside>
        <section className="info">
          <aside className="product__container__info sticky">
            <TitleProduct
              view="desktop"
              title={title}
              shortDescription={shortDescription}
              reviewStar={reviewStar}
            />
            <p className="product__container__info--description">
              {longDescription}
            </p>
            <section className="product__container__info__tab">
              <Accordion
                benefits={benefits}
                ingredients={ingredients}
                howToUse={howToUse}
              />
            </section>
            <article className="product__container__info__klarna">
              <p>
                Pay in 4 interest-free installments for orders over £50.00 with
              </p>
              <span class="product__container__info__klarna--logo">
                <img src="/images/klarna.svg" alt="klarna logo" />
                <Link to="#">Learn more</Link>
              </span>
            </article>

            <section className="product__container__info__prices">
              <button
                className="product__container__info__prices--btnPrice"
                value={`${datasize.small.price}`}
                onClick={handlePriceClick}
                data-size={`${datasize.small.size}`}
              >
                {`${datasize.small.size} - £${datasize.small.price}`}
              </button>
              <button
                className="product__container__info__prices--btnPrice "
                value={`${datasize.medium.price}`}
                data-size={`${datasize.bigger.size}`}
                onClick={handlePriceClick}
              >
                {`${datasize.bigger.size} - £${datasize.medium.price}`}
              </button>
              <button
                className="product__container__info__prices--btnPrice "
                value={`${datasize.bigger.price}`}
                data-size={`${datasize.medium.size}`}
                onClick={handlePriceClick}
              >
                {`${datasize.medium.size} - £${datasize.bigger.price}`}
              </button>
            </section>

            <input
              type="button"
              value="add to cart"
              className={`btnAddToCart ${priceItem === 0 && 'inactive'}`}
              onClick={handleAddToCart}
              disabled={priceItem === 0 && true}
            />
          </aside>
        </section>
      </section>

      <Recommended recommended={recommended} />
    </main>
  );
}

export default Moistures;
