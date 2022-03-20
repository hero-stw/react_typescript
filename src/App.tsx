import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminHomePage from "./pages/AdminHomePage";
import Homepage from "./pages/HomePage";
import AdminLayout from "./pages/layouts/AdminLayout";
import ClientLayout from "./pages/layouts/ClientLayout";
// Voi import khong default thi co the as
import { USER_LOGIN as LOGIN_USER } from "./pages/login";
import Product from "./pages/products/Product";
import ProductDetail from "./pages/products/ProductDetail";
import ProductFrom from "./pages/products/ProductFrom";

function App() {
  return (
    <div className="App">
      <div>
        <ul className="flex items-center justify-between space-x-4 max-w-[500px] mx-auto">
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
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route path="product">
            <Route index element={<Product />} />
            <Route path=":id" element={<ProductDetail />} />
            <Route path=":id/edit" element={<ProductFrom />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
