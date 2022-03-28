import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCate } from "../../api/category";
import { createProduct } from "../../api/product";

type Props = {};

const ProductForm = (props: Props) => {
  const navigate = useNavigate();

  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  // const [category, setCategory] = React.useState<string>("");
  const [error, setError] = React.useState<string[]>([]);

  const onValidate = (data: { name: string; price: number }) => {
    const validateMessages: string[] = [];
    if (!data.name) {
      validateMessages.push("Name is required");
    } else if (data.name.length < 6) {
      validateMessages.push("Name must be at least 6 characters");
    }
    if (!data.price) {
      validateMessages.push("Price is required");
    } else if (data.price < 1) {
      validateMessages.push("Price must be greater than 0");
    }
    return validateMessages;
  };
  const handleSubmit = async () => {
    const data = {
      name,
      price,
    };
    const validate = onValidate(data);
    if (validate.length === 0) {
      error.length && setError([]);
      const res = await createProduct(data);
      if (res.status === 201) {
        window.location.href = "/product";
      }
    }
  };
  return (
    <div>
      <h1>Add new Product</h1>
      <div>
        <form action="">
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border p-2 w-full"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="border p-2 w-full"
              id="price"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="category">Category</label>
            <select name="" id="category">
              {categories.map((cate) => (
                <option value={cate.id} key={cate.id}>
                  {cate.name}
                </option>
              ))}
            </select>
          </div> */}
          {/* <div className="mb-4">
          <label htmlFor="image">Image</label>
          <input type="file" className="border p-2 w-full" id="image" />
        </div> */}
          <button type="button" onClick={() => handleSubmit()}>
            Add
          </button>
        </form>
      </div>
      <div>
        {error.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductForm;
