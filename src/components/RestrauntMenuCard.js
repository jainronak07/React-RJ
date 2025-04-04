import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { MENU_API } from "../util/constants";
import Shimer from "./Shimer";
import useResMenu from "../util/useResMenu";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const [error, setError] = useState(null);

  const resInfo = useResMenu(resId);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!resInfo) {
    return <Shimer />;
  }

  const restaurantData = resInfo?.cards[2]?.card?.card?.info;
  const menuItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  return (
    <div className="Menu">
      <h1>{restaurantData?.name}</h1>
      <h2>{restaurantData?.costForTwoMessage}</h2>
      <h2>{restaurantData?.cuisines?.join("-")}</h2>
      <h1>Menu list:</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
