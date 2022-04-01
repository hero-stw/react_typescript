import instance from "./axios";
import { BOOK_CATEGORY } from "../pages/books/type/Book";

export const getAllBookCategories = () => {
  return instance.get("/bookcategories");
};

export const getBookCategory = (id: number | string | undefined) => {
  return instance.get("/bookcategories/" + id);
};

export const createBookCategory = (bookCategory: BOOK_CATEGORY) => {
  return instance.post("/bookcategories", bookCategory);
};

export const updateBookCategory = (
  id: number | string | undefined,
  bookCategory: BOOK_CATEGORY
) => {
  return instance.put("/bookcategories/" + id, bookCategory);
};

export const deleteBookCategory = (id: number | string | undefined) => {
  return instance.delete("/bookcategories/" + id);
};
