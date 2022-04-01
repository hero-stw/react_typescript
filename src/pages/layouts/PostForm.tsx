import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { POST } from "./PostList";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/post";

const PostForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      desc: "",
      author: "",
      category: "",
      thumbnail: "",
      status: 0,
    },
  });
  console.log(errors);
  const handleSubmitPost = async (data: POST) => {
    const response = await createPost(data);

    if (response.status === 201) {
      navigate("/posts");
    }
  };
  const onSubmit: SubmitHandler<POST> = (data) => {
    handleSubmitPost(data);
  };
  return (
    <div>
      <div className="max-w-[600px] mx-auto my-10 text-left">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Post Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
              })}
            />
            <p>{errors?.title?.message}</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <input
              type="text"
              id="desc"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("desc", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
            />
            <p>{errors?.desc?.message}</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("author", {
                required: true,
              })}
            />
            <p>{errors?.author?.message}</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Category
            </label>
            <input
              type="text"
              id="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("category", {})}
            />
            <p>{errors?.category?.message}</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("status", {
                required: true,
              })}
            />
            <p>{errors?.status?.message}</p>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
