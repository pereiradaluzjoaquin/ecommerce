import axios from "axios";

export const fetchCartByUser = async () => {
    const res = await axios.get("https://fakestoreapi.com/carts/user/" + 1);
    return res.data;
}

export const saveCart = async (products) => {
    const res = await axios.post("https://fakestoreapi.com/carts", {userId: 1, date: "2022-02-03", products });
    return res.data;
}