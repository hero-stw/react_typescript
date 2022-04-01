import { POST } from "../pages/layouts/PostList";
import instance from "./axios";

export const getAllPosts = () => {
  return instance.get("/posts");
};

export const getPost = (id: number | string | undefined) => {
  return instance.get("/posts/" + id);
};

export const createPost = (post: POST) => {
  return instance.post("/posts", post);
};

export const updatePost = (id: number | string | undefined, post: POST) => {
  return instance.put("/posts/" + id, post);
};

export const deletePost = (id: number | string | undefined) => {
  return instance.delete("/posts/" + id);
};
