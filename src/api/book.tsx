import instance from "./axios";
import { BOOK } from "../pages/books/type/Book";

export const getAllBooks = () => {
  return instance.get("/books");
};

export const getBook = (id: number | string | undefined) => {
  return instance.get("/books/" + id);
};

export const createBook = (book: BOOK) => {
  return instance.post("/books", book);
};
export const updateBook = (id: number | string | undefined, book: BOOK) => {
  return instance.put("/books/" + id, book);
};

export const deleteBook = (id: number | string | undefined) => {
  return instance.delete("/books/" + id);
};
