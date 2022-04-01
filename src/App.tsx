import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminHomePage from "./pages/AdminHomePage";
import CategoryForm from "./pages/books/bookcategory/CategoryForm";
import CategoryList from "./pages/books/bookcategory/CategoryList";
import BookForm from "./pages/books/BookForm";
import BookList from "./pages/books/BookList";
import Homepage from "./pages/HomePage";
import AdminLayout from "./pages/layouts/AdminLayout";
import ClientLayout from "./pages/layouts/ClientLayout";
import PostDetail from "./pages/layouts/PostDetail";
import PostForm from "./pages/layouts/PostForm";
import PostList from "./pages/layouts/PostList";
import Product from "./pages/products/Product";
import ProductDetail from "./pages/products/ProductDetail";
import ProductForm from "./pages/products/ProductForm";

function App() {
  return (
    <div className="App">
      <div>
        <ul className="flex items-center justify-between space-x-4 max-w-[900px] mx-auto">
          <li>
            <Link to={"/"}>Homepage</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/admin"}>Admin Home</Link>
          </li>
          <li>
            <Link to={"/admin/product"}>Admin Product</Link>
          </li>
          <li>
            <Link to={"/posts"}>Post</Link>
          </li>
          <li>
            <Link to={"/books"}>Books</Link>
          </li>
          <li>
            <Link to={"/books/category"}>Books Category</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="product" element={<ClientLayout />}>
          <Route path=":id" element={<ProductDetail />} />
          <Route path="edit/:id" element={<ProductForm />} />
          <Route path="create" element={<ProductForm />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route path="product"></Route>
        </Route>
        <Route path="posts">
          <Route index element={<PostList />} />
          <Route path=":id" element={<PostDetail />} />
          <Route path="edit/:id" element={<PostForm />} />
          <Route path="create" element={<PostForm />} />
        </Route>
        <Route path="books">
          <Route index element={<BookList />} />
          <Route path="edit/:id" element={<BookForm />} />
          <Route path="create" element={<BookForm />} />
          <Route path="category" element={<CategoryList />} />
          <Route path="category/create" element={<CategoryForm />} />
          <Route path="category/edit/:id" element={<CategoryForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
