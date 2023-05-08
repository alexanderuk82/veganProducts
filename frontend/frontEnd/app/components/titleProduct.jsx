// //Function to generate stars
// function generateStars(reviewStar) {
//   const stars = [];
//   for (let i = 0; i < reviewStar; i++) {
//     stars.push(<img src="/images/star.svg" alt="star" />);
//   }
//   return stars;  
// }

// function TitleProduct({ title, shortDescription, reviewStar, view }) {
//   return (
//     <header className={`product__container__header ${view}`}>
//       <h1 className="productTitle">{title}</h1>
//       <p className="productDescription">{shortDescription}</p>
//       <div className="productReview">
//         {generateStars(reviewStar)}
//         <small>15 reviews</small>
//       </div>
//     </header>
//   );
// }

// export default TitleProduct;
function generateStars(reviewStar) {
  const stars = [];
  for (let i = 0; i < reviewStar; i++) {
    stars.push(<img key={i} src="/images/star.svg" alt="star" />);
  }
  return stars;
}

function TitleProduct({ title, shortDescription, reviewStar, view }) {
  return (
    <header className={`product__container__header ${view}`}>
      <h1 className="productTitle">{title}</h1>
      <p className="productDescription">{shortDescription}</p>
      <div className="productReview">
        {generateStars(reviewStar)}
        <small>15 reviews</small>
      </div>
    </header>
  );
}

export default TitleProduct;

