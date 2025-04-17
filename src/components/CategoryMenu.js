import { useDispatch } from "react-redux";
import { CDN_URL } from "../util/constants";
import { additem } from "./CartPage/cartSlice";

export const CategoryMenu = ({ item }) => {
  const dispatch = useDispatch();

  handelAddItem = (item) => {
    dispatch(additem(item));
  };
  return (
    <div className="h-auto border-b-2 border-gray-400 p-5 mt-2 rounded-2xl flex justify-between items-start">
      <div className="flex flex-col justify-between max-w-[70%]">
        <div className="font-medium">
          {item?.isVeg ? "VEG 🟢" : "NON-VEG 🔴"}
        </div>
        <div className="font-bold text-2xl">{item?.name}</div>
        <div className="text-red-500 my-2">
          {"RS "}
          {item?.price / 100}
        </div>
        <div className="text-gray-500">{item?.description}</div>
      </div>
      <div className="w-[140px] h-[140px] ml-4 shrink-0">
        <button
          className="text-black rounded-lg w-15 shadow-2xl absolute bg-amber-300 m-auto"
          onClick={() => handelAddItem(item)}
        >
          Add+
        </button>
        <img
          className="w-full h-full object-contain rounded-lg shadow-md"
          src={CDN_URL + item?.imageId}
          alt="food"
        />
      </div>
    </div>
  );
};
