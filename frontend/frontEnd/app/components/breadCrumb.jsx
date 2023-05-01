import { Link } from "@remix-run/react";


function BreadCrumb({title, category}) {
  return (
    <section className="breadcrumb">
      <Link to="/">Home</Link>
      <Link to="/shop">shop</Link>
      <Link to={`/shop/${category}`}>{title}</Link>
    </section>
  );
}

export default BreadCrumb;
