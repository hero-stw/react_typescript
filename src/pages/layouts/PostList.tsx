import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deletePost, getAllPosts, getPost } from "../../api/post";

export type POST = {
  _id: number | string;
  title: string;
  desc: string;
  author: string;
  category: string;
  thumbnail: string;
  status: number;
};

export default function PostList() {
  const [posts, setPosts] = React.useState<POST[]>([]);
  const handleFetchPosts = async () => {
    const data = await getAllPosts();
    setPosts(data.data);
  };
  const handleDeletePost = async (id: number | string) => {
    const post = await deletePost(id);
    console.log(post);
    if (post.status === 200) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };
  useEffect(() => {
    handleFetchPosts();
  }, []);
  return (
    <div>
      <div>
        <Link to={`/posts/create`}>
          <button>Create Post</button>
        </Link>
      </div>
      <div>
        <table className="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Product Name
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Product Price
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Category
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  {post.title}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  {post.desc}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {post.category}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-4">
                  <button className="btn py-[0.5rem] px-[1rem] bg-orange-400 rounded-sm text-sm text-white">
                    Edit
                  </button>
                  <button
                    className="btn py-[0.5rem] px-[1rem] bg-gray-500 rounded-sm text-sm text-white"
                    onClick={() => handleDeletePost(post._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
