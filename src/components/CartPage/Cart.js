import { useSelector, useDispatch } from "react-redux";
import { CategoryMenu } from "../CategoryMenu";
import { clearCart } from "./cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  handelClearCart = () => {
    console.log("clear cart");
    dispatch(clearCart());
  };

  const cart = cartItem.length;

  return (
    <div className="flex flex-col items-center px-10 py-5">
      <div className="text-5xl p-3 m-5 font-bold">CART</div>
      <div className="w-full px-150">
        {cart > 0 ? (
          cartItem.map((item, index) => (
            <CategoryMenu key={index} item={item} />
          ))
        ) : (
          <div className="py-12 flex justify-center text-2xl font-semibold">
            Your cart is empty
          </div>
        )}
      </div>
      {cart > 0 && (
        <div>
          <button
            className="border-2 p-2 m-10 rounded-2xl bg-amber-600 text-white font-bold text-xl"
            onClick={handelClearCart}
          >
            Clear cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
