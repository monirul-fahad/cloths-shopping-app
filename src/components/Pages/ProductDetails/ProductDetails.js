import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const { img, title, desc, price } = products;

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/find/${productId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt={title} />
          </div>
          <div className="col-md-6">
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
