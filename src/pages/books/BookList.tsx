import React from "react";
import { Link } from "react-router-dom";
import { deleteBook, getAllBooks } from "../../api/book";
import { getAllBookCategories } from "../../api/bookcategory";
import { BOOK, BOOK_CATEGORY } from "../../pages/books/type/Book";
type Props = {};

export default function BookList({}: Props) {
  const [books, setBook] = React.useState<BOOK[]>([]);
  const [bookCate, setBookCate] = React.useState<BOOK_CATEGORY[]>([]);

  const handleDeleteBook = async (id: number | string) => {
    const book = await deleteBook(id);
    if (book.status === 200) {
      setBook(books.filter((book) => book._id !== id));
    }
  };

  React.useEffect(() => {
    getAllBookCategories().then((res) => {
      setBookCate(res.data);
    });
    getAllBooks().then((res) => {
      setBook(res.data);
    });
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[800px] mx-auto mt-10">
      <div className="flex items-center justify-between px-4">
        <h1 className="text-[3rem] text-black mb-5 font-bold">Book list</h1>
        <Link to={"create"}>
          <button
            className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Add book +
          </button>
        </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Book name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((item) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={item._id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {item.name}
              </th>
              <td className="px-6 py-4">{item.price}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4 text-right">
                <Link to={`/books/edit/${item._id}`}>
                  <button className="btn py-[0.5rem] px-[1rem] bg-orange-400 rounded-sm text-sm text-white">
                    Edit
                  </button>
                </Link>
                <button
                  className="btn py-[0.5rem] px-[1rem] bg-gray-500 rounded-sm text-sm text-white"
                  onClick={() => handleDeleteBook(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
