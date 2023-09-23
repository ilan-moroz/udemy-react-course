import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>Home Page</h1>
      <Link to={"/products"}>Products Page</Link>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Home;
