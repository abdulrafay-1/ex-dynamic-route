import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products?skip=30")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center text-3xl lg:text-4xl mb-4 font-semibold">
        Products
      </h1>
      {error && (
        <h2 className="text-center mt-10 text-2xl underline text-red-400">
          Error Fetching Products...
        </h2>
      )}
      {loading && (
        <div className="h-[80vh] flex justify-center items-center">
          <div
            className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="flex gap-2 justify-around  flex-wrap">
        {products &&
          products.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden w-[300px] rounded bg-white text-slate-500 shadow-md shadow-slate-200"
            >
              <figure>
                <img
                  src={item.thumbnail}
                  alt="card image"
                  className=" object-cover w-full"
                />
              </figure>
              <div className="p-6">
                <header className="mb-4">
                  <h3 className="text-xl font-medium text-slate-700">
                    {item.title}
                  </h3>
                  <p className=" text-slate-400"> ${item.price}</p>
                </header>
              </div>
              <div className="flex justify-end p-6 pt-0">
                <button
                  onClick={() => navigate(`product/${item.id}`)}
                  className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none"
                >
                  <span>View</span>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
