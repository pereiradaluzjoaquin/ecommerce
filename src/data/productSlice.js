import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        productDetail: {},
        productsInCart: [],
        counter:0,
        disabledAddCart: true,
        cartDetail: [],
        totalDetail: 0,
        totalProductsInCart: 0,
    },
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload;
        },
        setProduct: (state, { payload }) => {
            state.productDetail = payload;
        },
        setProductInCart: (state, { payload }) => {
            const exist = state.productsInCart.filter((item) => item.productId === payload.product.id);
            if (exist[0]) {
                state.productsInCart = state.productsInCart.map((item) => item.productId === payload.product.id ? { productId: item.productId, quantity: item.quantity +1} : item);
            } else {
                state.productsInCart.push({ productId: payload.product.id, quantity: 1 });
            }
            state.counter = state.productsInCart.filter((item) => item.productId === payload.product.id)[0].quantity;
            state.disabledAddCart = false;
            let sum = 0;
            state.productsInCart.forEach((product) => sum += product.quantity);
            state.totalProductsInCart = sum;
        },
        removeProductInCart: (state, { payload }) => {
            const exist = state.productsInCart.filter((item) => item.productId === payload.product.id);
            if (exist[0]?.quantity === 1) {
                state.productsInCart = state.productsInCart.filter((item) => item.productId !== payload.product.id);
            } else {
                state.productsInCart = state.productsInCart.map((item) => item.productId === payload.product.id ? { productId: item.productId, quantity: item.quantity - 1 } : item);
            }
            const newCounter = state.productsInCart.filter((item) => item.productId === payload.product.id)[0]?.quantity;
            if (newCounter) {
                state.counter = newCounter;
                state.disabledAddCart = false;
                let sum = 0;
                state.productsInCart.forEach((product) => sum += product.quantity);
                state.totalProductsInCart = sum;
            }
            else {
                state.counter = 0;
                state.disabledAddCart = true;
                state.totalProductsInCart = 0;
            }
        },
        setProductCount: (state, { payload }) => {
            const exist = state.productsInCart.filter((item) => item.productId === payload.id);
            if (exist.length > 0) {
                state.counter = exist[0].quantity;
                state.disabledAddCart = false;
            } 
        },
        getCartProducts: (state, { payload }) => {
            const products = state.productsInCart.map((element) =>{
                const product = state.products.find((product) => element.productId === product.id);
                if (product){
                    return {...product, quantity: element.quantity, total: element.quantity * product.price}
                }
            })
            state.cartDetail = products;
            let sum = 0;
            products.forEach((product) => sum += product.total);
            state.totalDetail = sum;
        },
        deleteCart: (state, { payload }) => {
            state.counter = 0;
            state.disabledAddCart = true;
            state.totalProductsInCart = 0;
            state.totalDetail = 0;
            state.productsInCart = [];
            state.cartDetail = [];
        },
        resetCounter: (state, { payload }) => {
            state.counter = 0;
        },
    },
});

export const { setProducts, setProductInCart, removeProductInCart, setProduct, resetCounter, setProductCount, getCartProducts, deleteCart } = productSlice.actions;

export default productSlice.reducer;
