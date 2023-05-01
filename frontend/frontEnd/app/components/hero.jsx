function Hero({ title, description, category }) {
  return (
    <header className="hero">
      <style jsx="true">
        {`
          .hero {
            background: url('/images/${category}.jpg') no-repeat center/cover;
            background-position: 40%;
          }
        `}
      </style>

      <div className="hero__content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}

export default Hero;
