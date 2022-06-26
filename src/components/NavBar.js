import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
    const totalProductsInCart = useSelector((state) => state.product.totalProductsInCart);

    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Ecommerce</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/Home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Products">Products</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link bi bi-cart" to="/Cart">{totalProductsInCart}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
