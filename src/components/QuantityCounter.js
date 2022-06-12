import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductInCart, removeProductInCart, setCounterForProduct } from "../data/productSlice";

export const QuantityCounter = ({ product }) => {
    const counter = useSelector((state)=> state.product.counter);
    const dispatch = useDispatch();
    const productsInCart = useSelector((state) => state.product.productsInCart);


    const IncreaseCounter = () => {
        dispatch(setProductInCart({ product: product}));
    };

    const DecreaseCounter = () => {
        dispatch(removeProductInCart({ product: product }));
    };
    console.log(productsInCart);
    console.log(['counter', counter]);
    return (
        <div class="row">
            <div class="col-sm-4">
                <span class="bi bi-dash cursor-pointer" onClick={DecreaseCounter}></span>
            </div>
            <div class="col-sm-4">
                <span>{counter}</span>
            </div>
            <div class="col-sm-4">
                <span class="bi bi-plus cursor-pointer" onClick={IncreaseCounter}></span>
            </div>
        </div>
    );
}