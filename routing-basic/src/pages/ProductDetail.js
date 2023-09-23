import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <>
      <h1>Products details</h1>
      {params.productId}
    </>
  );
};

export default ProductDetails;
