import React from "react";

const Card = ({ src, title, description, price, rating, brand, category }) => {
  return (
    <div className="overflow-hidden border  rounded bg-white text-slate-500 shadow-md shadow-slate-200">
      <figure>
        <img
          src={src}
          alt="card image"
          className="aspect-video object-contain w-full"
        />
      </figure>
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-2xl font-medium text-slate-700">{title}</h3>
          <p className="text-md text-slate-400">{price}$</p>
        </header>
        <p>Brand : {brand ? brand : "no brand"}</p>
        <p>Category : {category}</p>
        <p>Description : {description}</p>
        <p>Rating : {rating}</p>
      </div>
    </div>
  );
};

export default Card;
