import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getAllProducts = () => axiosInstance.get("/products");

export const getAllProductCategories = () => axiosInstance.get("/products/categories");

export const getProductById = (id) => axiosInstance.get(`/products/${id}`);

export const getProductByCategory = (slug) => axiosInstance.get(`/products/category/${slug}`);
