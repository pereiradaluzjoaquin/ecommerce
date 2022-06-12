import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, resetCounter, setProductCount, deleteCart } from "../data/productSlice";
import { fetchProductById } from '../api/productAPI';
import { Link } from "react-router-dom";
import { QuantityCounter } from './QuantityCounter';




const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.product.productDetail);
    const disabledAddCart = useSelector((state) => state.product.disabledAddCart);
    const productsInCart = useSelector((state) => state.product.productsInCart);
    useEffect(() => {
        fetchProductById(id).then((product) => {
            dispatch(setProduct(product));
            dispatch(setProductCount(product));
        });
    }, []);

    const resetCounter = () => {
        dispatch(resetCounter());
    }

    const DeleteCart = () => {
        dispatch(deleteCart());
    }

    return (
        <div class="container" style={{ marginTop: '40px' }}>
            <Link class="btn-close float-end" to="/Products"></Link>
            <div class="row">
                <div class="col-sm-6">
                    <a href={productDetail.image}><img src={productDetail.image} alt={productDetail.title} width="400" height="500" /></a>
                </div>
                <div class="col-sm-6">
                    <h4>{productDetail.title}</h4>
                    <h6>{productDetail.category}</h6>
                    <p>
                        {productDetail.description}
                    </p>
                    <div class="row">
                        <label>
                            Price:
                        </label>
                        <h5>
                            ${productDetail.price}
                        </h5>
                    </div>
                    <div class="row py-5">
                        <QuantityCounter product={productDetail} />
                    </div>
                    <div class="row py-5">
                        <Link class={`btn btn-primary ${disabledAddCart ? "disabled" : ""}`} to="/Cart">Go to Cart</Link>
                        <button onClick={DeleteCart} class={`btn btn-secondary`}>Delete Cart</button>
                    </div>
                    <p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;