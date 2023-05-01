import styleHero from '~/styles/css/hero.css';
import styleBreadCrumb from '~/styles/css/breadcrumb.css';
import styleCard from '~/styles/css/cards.css';
import styles from '~/styles/css/category.css';
import styleComponent from '~/styles/css/components.css';
import styleRecommended from '~/styles/css/recommended.css';
import styleSlider from '~/styles/css/slider.css';
import Hero from '../../../components/hero';
import { Link, useLoaderData } from '@remix-run/react';
import BreadCrumb from '../../../components/breadCrumb';
import { getMoistures } from '../../../models/moistures.server';
import { getRecommended } from '../../../models/recommended.server';
import Card from '../../../components/card';
import Slider from '../../../components/slider';

export async function loader() {
  const [moistures, recommended] = await Promise.all([
    getMoistures(),
    getRecommended(),
  ]);

  return {
    moistures: moistures.data,
    recommended: recommended.data,
  };
}

export function meta() {
  return {
    charset: 'utf-8',
    title: 'The Vegan | Moistures products vegan online',
    description: 'product',
  };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styleHero,
    },
    {
      rel: 'stylesheet',
      href: styleBreadCrumb,
    },
    {
      rel: 'stylesheet',
      href: styleCard,
    },
    {
      rel: 'stylesheet',
      href: styleComponent,
    },
    {
      rel: 'stylesheet',
      href: styleRecommended,
    },
    {
      rel: 'stylesheet',
      href: styleSlider,

    },

    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

function Index() {
  const { moistures, recommended } = useLoaderData();

  return (
    <>
      <Hero
        category="moistures"
        title="Nourish and Hydrate Your Skin"
        description="Discover our luxurious vegan body moisturizers for silky smooth skin"
      />

      <main className="main">
        <BreadCrumb title="body moistures" category="moistures" />

        <section className="main__products">
          <div className="main__products__title">
            <h2 className="h2">main products</h2>
            <Link to="/shop">view all</Link>
          </div>
          <div className="main__products__container">
            {moistures?.length !== 0 ? (
              <>
                {moistures.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </>
            ) : (
              'no hay datos'
            )}
          </div>

          <div className="recommended">
            <div className="main__products__title">
              <h2 className="h2">products recommended</h2>
              <Link to="/shop">view all</Link>
            </div>
            <div className="recommended__container">
              <Slider 
              recommended={recommended}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Index;
