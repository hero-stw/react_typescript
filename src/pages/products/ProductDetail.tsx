import React from "react";
import { useParams } from "react-router-dom";
type Props = {};

const ProductDetail = (props: Props) => {
  console.log(useParams());

  return <div>ProductDetail</div>;
};

export default ProductDetail;
