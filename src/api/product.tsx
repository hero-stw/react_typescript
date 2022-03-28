import instance from "./axios";
import { getCate } from "./category";

export const getAllProducts = () => {
  return instance.get("/products");
};
export const getProduct = (id: number | string | undefined) => {
  return instance.get("/products/" + id);
};
export const createProduct = (product: {}) => {
  return instance.post("/products", product);
};
export const updateProduct = (id: number | string, product: {}) => {
  return instance.put("/products/" + id, product);
};
export const deleteProduct = (id: number | string) => {
  return instance.delete("/products/" + id);
};

export const getProductWithCateName = (id: number | string) => {
  const product = instance.get("/products/" + id);
  const cateId = product.then(({ data }): string | number => data.category);
  // return getCate(cateId);
};
