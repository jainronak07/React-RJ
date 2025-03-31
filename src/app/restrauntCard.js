import React from "react";
import { CDN_URL } from "../util/constants";

export const RestrauntCard = (props) => {
    const { resData } = props;
    return (
      <div className="Card">
        <div className="img">
          <img
            src={
              CDN_URL +
              resData.info.cloudinaryImageId
            }
            alt="Restaurant"
          />
        </div>
        <div className="ResDetail">
          <span style={{ fontWeight: 700, fontSize: "20px" }}>
            {resData.info.name}
          </span>
          <span>{resData.info.areaName}</span>
          <span>{resData.info.sla.slaString}</span>
          <span>{resData.info.costForTwo}</span>
          <span>{resData.info.avgRatingString}</span>
          <span>
            {"Cuisines-"}
            {resData.info.cuisines.join(" , ")}
          </span>
          <span>{resData.info.slaString}</span>
        </div>
      </div>
    );
  };