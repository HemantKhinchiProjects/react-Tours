import React from 'react';
const Tour = ({ id, name, image, info, price }) => {
  return (
    <article className="single-tour">
      <footer>
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </footer>
    </article>
  );
};
export default Tour;
