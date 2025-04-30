import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);
  return (
    <div>
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 mx-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center p-3">
              {" "}
              {cart.map((cartItem) => (
                <CartTile cart={cartItem} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-end justify-center p-4 space-y-5 mt-14">
            <h1 className="font-bold text-red-800 text-lg">
              Your Cart Summary
            </h1>
            <p>
              <span className="text-gray-800 font-bold">Total Item</span>
              <span>: {cart.length}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Total Amount</span>
              <span>: {totalCart}</span>
            </p>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-3 ">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
