import { Link, useLoaderData } from '@remix-run/react';
import styleIndex from '~/styles/css/index.css';
import stylesCategory from '~/styles/css/category.css';
import { getExfoliants } from '../models/exfoliants';
import { getMoistures } from '../models/moistures.server';
import { getFacials } from '../models/facials';
import { useEffect, useState } from 'react';
import Card from '../components/card';
import Testimonials from '../components/testimonials';

export async function loader() {
  const [exfoliants, moistures, facials] = await Promise.all([
    getExfoliants(),
    getMoistures(),
    getFacials(),
  ]);

  return {
    exfoliants,
    moistures,
    facials,
  };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styleIndex,
    },
    {
      rel: 'stylesheet',
      href: stylesCategory,
    },
  ];
}

export default function Index() {
  const [featured, setFeatured] = useState([]);

  const { exfoliants, moistures, facials } = useLoaderData();

  useEffect(() => {
    const featuredExfoliants = exfoliants.data.filter(
      (item) => item.attributes.featured === true
    );
    const featuredMoistures = moistures.data.filter(
      (item) => item.attributes.featured === true
    );
    const featuredFacials = facials.data.filter(
      (item) => item.attributes.featured === true
    );
    setFeatured([
      ...featuredExfoliants,
      ...featuredMoistures,
      ...featuredFacials,
    ]);
  }, [exfoliants, moistures, facials]);

  return (
    <>
      <header className="hero">
        <article className="hero__title">
          <h1 className="hero__title--h1">Discover Nature's Embrace</h1>
          <p>Pamper Yourself with Vegan, Cruelty-Free Body Care Products</p>
          <Link to="/shop" className="hero__title--btn">
            Explore Our Collection
          </Link>
        </article>
        <img
          src="/images/heroImage.png"
          alt="hero-mage-section"
          className="hero--img"
        />
      </header>
      <article className="sliderPromo">
        <div className="sliderContainer">
          <span className="slider">
            Claim your free sample
            <img src="/images/flower.svg" alt="icon-decoration" />
          </span>
          <span className="slider">
            Claim your free sample
            <img src="/images/flower.svg" alt="icon-decoration" />
          </span>
          <span className="slider">
            Claim your free sample
            <img src="/images/flower.svg" alt="icon-decoration" />
          </span>
          <span className="slider">
            Claim your free sample
            <img src="/images/flower.svg" alt="icon-decoration" />
          </span>
          <span className="slider">
            Claim your free sample
            <img src="/images/flower.svg" alt="icon-decoration" />
          </span>
          <span className="slider">
            Claim your free sample
            <img src="/images/flower.svg" alt="icon-decoration" />
          </span>
          <span className="slider">
            Claim your free sample
            <img src="/images/flower.svg" alt="icon-decoration" />
          </span>
          <span className="slider">
            Claim your free sample
            <img src="/images/flower.svg" alt="icon-decoration" />
          </span>
          <span className="slider">
            Claim your free sample
            <img src="/images/flower.svg" alt="icon-decoration" />
          </span>
        </div>
      </article>
      <main className="main">
        <article className="main__products__title">
          <h2 className="h2">featured products</h2>
          <Link to="/shop">view all</Link>
        </article>

        <section className="main__products__container">
          {featured?.length !== 0 ? (
            <>
              {featured.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </>
          ) : (
            'nothing to display in this moment'
          )}
        </section>
      </main>
      <section className="whyUs">
        <article className="whyUs--text">
          <h2>Why choose us</h2>
          <h4>
            We're committed to providing high-quality body care products that
            prioritize ethics and sustainability. Our vegan and cruelty-free
            products are created with the utmost respect for animals and the
            environment, meeting the needs of environmentally conscious users
            like you.
          </h4>
        </article>
        <img src="/images/whyChooseUs.svg" alt="why-us" />
      </section>
      <section className="testimonials">
        <Testimonials />
      </section>
    </>
  );
}
