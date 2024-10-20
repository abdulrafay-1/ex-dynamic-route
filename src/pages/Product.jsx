import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) {
          console.log("me chal", data.message);
          setProduct(data);
        } else {
          setError(true);
        }
        console.log(data.message);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);
  return (
    <>
      {error && <h3>Error Product not found !</h3>}
      {product && (
        <div className="container mt-10 lg:max-w-screen-sm mx-auto ">
          <Card
            title={product.title}
            description={product.description}
            price={product.price}
            brand={product.brand}
            rating={product.rating}
            src={product.thumbnail}
            category={product.category}
          />
        </div>
      )}
    </>
  );
};

export default Product;
