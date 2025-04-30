import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          <Circles
            width={"120"}
            height={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
