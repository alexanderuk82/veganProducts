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
import Card from '../../../components/card';
import Recommended from '../../../components/recommended';
import { useDataContext } from '../../../components/context';

export async function loader() {
  const moistures = await getMoistures();
  return moistures.data;
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
      href: styleSlider,
    },
    {
      rel: 'stylesheet',
      href: styleRecommended,
    },

    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

function Index() {
  const moistures = useLoaderData();
  const { recommended } = useDataContext();

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
          <section className="main__products__container">
            {moistures?.length !== 0 ? (
              <>
                {moistures.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </>
            ) : (
              'nothing to display in this moment'
            )}
          </section>

          <Recommended recommended={recommended} />
        </section>
      </main>
    </>
  );
}

export default Index;
