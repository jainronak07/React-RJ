import React from "react";
import { CDN_URL } from "../util/constants";

export const RestrauntCard = (props) => {
  const { resData } = props;
  return (
    <div className="border-2 bg-gray-200 hover:bg-gray-300 px-2 m-4 h-[600px] w-[330px] ">
      <div className=" p-5 flex justify-center">
        <img
          className="w-60 h-60 rounded-lg shadow-lg"
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="Restaurant"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-1 p-4">
        <span className="font-bold text-lg">{resData.info.name}</span>
        <span className="text-gray-600">{resData.info.areaName}</span>
        <span className="text-gray-600">{resData.info.sla.slaString}</span>
        <span className="text-gray-700">{resData.info.costForTwo}</span>
        <span className="text-green-600 font-medium">
          ⭐ {resData.info.avgRatingString}
        </span>
        <span className="text-sm text-gray-500">
          Cuisines – {resData.info.cuisines.join(", ")}
        </span>
        <span className="text-xs text-gray-500">{resData.info.slaString}</span>
      </div>
    </div>
  );
};

export const fastDeliveryLabel= (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-amber-600 text-white mx-2 p-2 rounded-lg -mt-1">Fast delivery</label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};
