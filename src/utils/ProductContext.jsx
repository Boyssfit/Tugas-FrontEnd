import React, { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "./ApiClient";

/* eslint-disable react-refresh/only-export-components */
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const queryClient = useQueryClient();
  

  //GET ALL PRODUCTS
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await apiClient.get("/products");
      return res.status === 200 ? res.data.data : [];
    },
  });

  // SHOW PRODUCT DETAIL
  const getProductById = async (id) => {
    const res = await apiClient.get(`/products/${id}`);
    return res.data.data;
  };
//store product
  const addProduct = async (formData) => {
    const response = await apiClient.post("/products", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    await queryClient.invalidateQueries({ queryKey: ["products"] });
    return response;
  };

  const updateProduct = async (id, formData) => {
    const response = await apiClient.post(
      `/products/${id}?_method=PUT`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    await queryClient.invalidateQueries({ queryKey: ["products"] });
    return response;
  };

  const deleteProduct = useMutation({
    mutationFn: (id) => apiClient.delete(`/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const getCategories = async () => {
    const res = await apiClient.get("/categories");
    return res.data;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        isError,
        getProductById,
        addProduct,
        updateProduct,
        deleteProduct,
        getCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProducts = () => useContext(ProductContext);