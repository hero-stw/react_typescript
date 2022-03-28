import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "./Product";
import { getProduct } from "../../api/product";
type Props = {};

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<ProductType>();
  const handleGetProduct = async () => {
    const product = await getProduct(id);
    setProduct(product.data);
  };

  useEffect(() => {
    handleGetProduct();
  });
  return (
    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24"></div>
  );
};

export default ProductDetail;
