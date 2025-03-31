import React, { useEffect, useState } from "react";
import { RestrauntCard } from "./restrauntCard";

export const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterRes, setfilterRes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <div className="body">
      <div>
        <input
          className="searchBar"
          type="text"
          placeholder="Search Restraunt / dish.................."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
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
          className="filter-btn"
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

      <div className="resContainer">
        {filterRes.map((restraunt) => (
          // console.log(restraunt.info.id)
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};
