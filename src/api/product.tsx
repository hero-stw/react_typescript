import instance from "./axios";

export const getAllProducts = () => {
  return instance.get("/products");
};
export const getProduct = (id: number | string) => {
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
