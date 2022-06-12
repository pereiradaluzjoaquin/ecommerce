import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProductsByCategory } from '../api/categoriesAPI';
import { setProducts } from "../data/productSlice";
import { fetchProducts } from '../api/productAPI';
import { setCategories } from "../data/categoriesSlice";



const Categories = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    useEffect(() => {
        getCategories().then((categories) => {
            dispatch(setCategories(categories));
        });
    }, []);
    const getProductsByCategoryName = (name) => {
        if (name === "All") {
            fetchProducts().then((products) =>{
                dispatch(setProducts(products));
            });
        }
        else {
            getProductsByCategory(name).then((products) => {
                dispatch(setProducts(products));
            });
        }
    }
    return (
        <div class="container py-4">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" id={-1} onClick={() => getProductsByCategoryName("All")} class="btn btn-outline-primary">All</button>
                {categories.map((category, key) => {
                    return <button type="button" onClick={() => getProductsByCategoryName(category)} id={key} class="btn btn-outline-primary">{category}</button>
                })}
            </div>
        </div>);
}

export default Categories;