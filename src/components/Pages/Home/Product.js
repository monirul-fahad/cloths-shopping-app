import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-6  mb-3" key={product._id}>
              <img className="w-100" src={product.img} alt={product.title} />
              <h4>{product.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
