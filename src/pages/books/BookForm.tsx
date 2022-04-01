import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createBook, getBook, updateBook } from "../../api/book";
import { getAllBookCategories } from "../../api/bookcategory";
import { BOOK, BOOK_CATEGORY } from "./type/Book";
type Props = {};

export default function BookForm({}: Props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookCate, setBookCate] = React.useState<BOOK_CATEGORY[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: null,
      category: "",
    },
  });
  const handleCreateBook = async (data: BOOK) => {
    const response = await createBook(data);

    if (response.status === 200) {
      navigate("/books");
    }
  };
  const handleUpdateBook = async (id: string | undefined, data: BOOK) => {
    const response = await updateBook(id, data);

    if (response.status === 200) {
      navigate("/books");
    }
  };
  const handleGetBook = async (id: string) => {
    const response = await getBook(id);
    if (response.status === 200) {
      reset(response.data);
    }
  };
  const handleGetAllBookCate = async () => {
    const response = await getAllBookCategories();
    if (response.status === 200) {
      setBookCate(response.data);
    }
  };
  React.useEffect(() => {
    if (id) {
      handleGetBook(id);
      handleGetAllBookCate();
    }
  }, [id]);

  const onSubmit: SubmitHandler<BOOK> = (data) => {
    if (id) {
      return handleUpdateBook(id, data);
    } else {
      return handleCreateBook(data);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-5">
      <h3 className="font-semibold text-[3rem] text-blueGray-700">
        Add new book
      </h3>
      <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: 6,
            })}
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.name?.message}
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("price", {
              required: { value: true, message: "Price is required" },
            })}
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.price?.message}
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Category
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("category", {
              required: { value: true, message: "Category is required" },
            })}
            value={bookCate.find((cate) => cate._id === id)?.name}
          >
            {bookCate.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.category?.message}
          </p>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
