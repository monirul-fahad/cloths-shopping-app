import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt={title} />
          </div>
          <div className="col-md-6 text-start pe-5">
            <h2 className="fs-1 py-3">{title}</h2>
            <p className="fs-3 text-info">Price- {price} BDT</p>
            <p className="fs-4">{desc}</p>
            <Link to="/orderPage">
              <button className="btn btn-success">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
