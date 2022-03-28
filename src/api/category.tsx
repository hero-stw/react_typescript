import instance from "./axios";

export const getAllCate = () => {
  return instance.get("/category");
};
export const getCate = (id: number | string) => {
  return instance.get("/category/" + id);
};
