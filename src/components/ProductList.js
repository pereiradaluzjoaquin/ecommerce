import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { setProducts, resetCounter } from "../data/productSlice";
import { fetchProducts } from '../api/productAPI';
import { Link } from "react-router-dom";
import Categories from './Categories';

export default function ProductList() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts().then((products) => {
      dispatch(setProducts(products));
      dispatch(resetCounter());
    });
  },[]);

  return (
    <div class="container-fluid">
      <h5><u>Select a Product:</u></h5>
      <Categories />
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th class="cursor-pointer" scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th class="cursor-pointer" scope="col">Rate</th>
              <th scope="col">Count</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, key) => {
              return <tr key={key}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img src={product.image} alt={product.title}  width="500" height="600"/></td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
                <td><Link class="nav-link bi bi-bag-plus" to={"/Product/"+product.id}>Add</Link></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}