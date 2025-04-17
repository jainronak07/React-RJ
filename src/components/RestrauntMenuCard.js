import { useEffect, useState, useId } from "react";

import { useParams } from "react-router-dom";
import { MENU_API } from "../util/constants";
import Shimer from "./Shimer";
import useResMenu from "../util/useResMenu";
import { RestrauntCategoryCard } from "./RestrauntCategoryCard";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const [error, setError] = useState(null);
  const [showIndex, setShowIndex] = useState();

  const resInfo = useResMenu(resId);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!resInfo) {
    return <Shimer />;
  }
  

  const restaurantData = resInfo?.cards[2]?.card?.card?.info;
  const menuCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  return (
    <div className="min-h-screen w-full bg-gray-200 flex justify-center items-start py-10">
      <div className="min-h-screen w-full max-w-4xl bg-white rounded-lg shadow-md p-10 flex flex-col gap-4">
        <span className="text-2xl font-bold text-gray-800 flex justify-center items-center">
          {restaurantData?.name}
        </span>
        <div className="border-2 shadow-2xl rounded-lg p-3  flex flex-col">
          <div className="text-xl text-green-500 font-bold">
            {"Cost-"} {restaurantData?.costForTwoMessage}
          </div>
          <div>{restaurantData?.cuisines?.join(" - ")}</div>
          <div>
            {"Outlet-"} {restaurantData?.areaName}
          </div>
          <div>
            {"Delivery Time-"} {restaurantData?.sla?.minDeliveryTime}
            {"-"}
            {restaurantData?.sla?.maxDeliveryTime}
            {" mins"}
          </div>
        </div>

        <div className="border-2 shadow-2xl rounded-lg p-3 flex flex-col font-bold  ">
          Deals For You
        </div>

        <span className="flex justify-center mt-4 font-semibold text-lg">
          Menu
        </span>

        <ul className="list-disc list-inside text-gray-700">
          {menuCategory
            ?.filter((item) => item?.card?.card?.title)
            .map((item, index) => {
              const data = item.card.card;
              return (
                <RestrauntCategoryCard
                  key={index}
                  data={data}
                  index={index}
                  showItem={index === showIndex ? true : false}
                  setShowIndex={()=> setShowIndex(index === showIndex ? null : index)}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
