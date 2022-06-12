import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, deleteCart } from "../data/productSlice";
import { Link } from "react-router-dom";
import { saveCart } from '../api/cartAPI';

const CartList = () => {
    const dispatch = useDispatch();
    const cartDetail = useSelector((state) => state.product.cartDetail);
    const totalDetail = useSelector((state) => state.product.totalDetail);
    const productsInCart = useSelector((state) => state.product.productsInCart);
    useEffect(() => {
        dispatch(getCartProducts());
    }, []);
    const orderCart = () => {
        saveCart(productsInCart);
    }
    const DeleteCart = () => {
        dispatch(deleteCart());
    }
    return (
        <div class="container">
            <Link class="btn-close float-end" to="/Products"></Link>
            <h5 class="text-center pt-4"><u>Cart Detail</u></h5>
            <div class="table-responsive pt-5">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope='col'>Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartDetail.map((product, key) => {
                            return <tr key={key}>
                                <td> <img src={product.image} alt={product.title} width="200" height="300" /></td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.total}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-sm-2 offset-sm-10">
                    Total: {totalDetail}
                </div>
            </div>
            <div class="row pt-2">
                <div class="col-sm-2 offset-sm-10">
                    <button class="btn btn-primary" onClick={orderCart}>Order</button>
                    <button class="btn btn-secondary" onClick={DeleteCart}>Delete Cart</button>
                </div>
            </div>
        </div>
    );
}

export default CartList;