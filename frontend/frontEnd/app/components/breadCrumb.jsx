import { Link } from '@remix-run/react';

function BreadCrumb({ title, category }) {
  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>
      <Link to="/shop">shop</Link>
      <Link to={`/shop/${category}`} className="nameProduct">
        {title}
      </Link>
    </nav>
  );
}

export default BreadCrumb;
