import axios from "axios";

export const getCategories = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    return res.data;
}

export const getProductsByCategory = async (categoryName) => {
    const res = await axios.get("https://fakestoreapi.com/products/category/" + categoryName);
    return res.data;
}

