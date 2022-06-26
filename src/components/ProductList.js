import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProducts, resetCounter } from "../data/productSlice";
import { fetchProducts } from '../api/productAPI';
import { Link } from "react-router-dom";
import Categories from './Categories';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    fetchProducts().then((products) => {
      dispatch(setProducts(products));
      dispatch(resetCounter());
    });
  }, []);

  return (
    <div class="container-fluid">
      <h5><u>Select a Product:</u></h5>
      <Categories />
      <div className='container'>
        <div className='row'>
          {products.map((product, key) => {
            return <div class=" col-sm-4 card">
              <img src={product.image} class="card-img-top" alt={product.title} height={"400px"} />
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">{product.description}</p>
                <Link class="btn btn-primary" to={"/Product/" + product.id}>Add</Link>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}