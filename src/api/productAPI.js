import axios from "axios";

export const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
}

export const fetchProductById = async (id) => {
    const res = await axios.get("https://fakestoreapi.com/products/" + id);
    return res.data;
}

