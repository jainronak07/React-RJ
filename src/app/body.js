import React, { useEffect, useState } from "react";
import { fastDeliveryLabel, RestrauntCard } from "./restrauntCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import Shimer from "../components/Shimer";

//TODO: add update api to add all resturants
export const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterRes, setfilterRes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const FastDelResturantCard = fastDeliveryLabel(RestrauntCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRes(restaurants);
    setfilterRes(restaurants);

    //   fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
    //     method: "POST",
    //     headers: {
    //         "accept": "application/json, text/plain, */*",
    //         "accept-language": "en-US,en;q=0.9",
    //         "content-type": "application/json",
    //         "x-csrf-token": "PUT_YOUR_ACTUAL_CSRF_TOKEN_HERE",
    //         "x-device-id": "PUT_YOUR_DEVICE_ID_HERE",
    //         "referer": "https://www.swiggy.com/",
    //         // If they use any Authorization header, add it too
    //         // "authorization": "Bearer YOUR_AUTH_TOKEN",
    //         // Include other headers you find in the network tab
    //     },
    //     body: JSON.stringify({
    //         lat: 28.5355161,           // example latitude
    //         lng: 77.3910265,           // example longitude
    //         nextOffset: "CJhlELQ4KICY0fqu+LbXdzCnEzgE", // you will find this in the payload of the real request
    //         widgetOffset: {},
    //         filters: {},
    //         seoParams: {},
    //         page_type: "DESKTOP_WEB_LISTING"
    //     })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err));
  };

  if (!onlineStatus) {
    return <h1>"You are Offline please connect to Internet"</h1>;
  }

  return listOfRes.length === 0 ? (
    <Shimer />
  ) : (
    <div>
      <div className="m-2">
        <input
          data-testid="searchbtn"
          className="border-2 border-black rounded-2xl px-4 p-2 m-2 placeholder-gray-400 w-100"
          type="text"
          placeholder="Search Restraunt / dish....."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="border-2 p-2 m-2 w-30 bg-amber-200 rounded-2xl hover:bg-orange-400"
          onClick={() => {
            const filteredList = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchInput)
            );
            setfilterRes(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="border-2 p-2 m-2 w-50 bg-amber-200 rounded-2xl hover:bg-orange-400"
          onClick={() => {
            const filteredList = filterRes.filter(
              (res) => res.info.avgRatingString > 4
            );
            setfilterRes(filteredList);
          }}
        >
          Filter By Cost
        </button>
      </div>

      <div className="flex flex-wrap ">
        {filterRes.map((restraunt) => (
          // console.log(restraunt.info.id)
          <Link to={"/restraunt/" + restraunt.info.id} key={restraunt.info.id}>
            {restraunt.info.sla.deliveryTime > 30 ? (
              <RestrauntCard resData={restraunt} />
            ) : (
              <FastDelResturantCard resData={restraunt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
