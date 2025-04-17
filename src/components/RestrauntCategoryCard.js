import { useState } from "react";
import { CategoryMenu } from "./CategoryMenu";

export const RestrauntCategoryCard = ({ data, showItem ,index,setShowIndex}) => {
  const carousel = data?.itemCards;

//   const [showItems, setShowItems] = useState(false);
  handelClick = () => {
    if (showItem) {
        setShowIndex(null); // Hide
      } else {
        setShowIndex(index); // Show this index
      }
  };

  return (
    <div className=" bg-gray-50  border-2 shadow-lg rounded gap-2 my-2 p-2">
          <div
            className="font-bold flex justify-between  text-xl text-gray-800 my-2 cursor-pointer"
            onClick={handelClick}>

            <div>
              {data.title}({data?.itemCards?.length || 0})
            </div>

            <span>🔽</span>
          </div>

          <div>
            {carousel
              ?.filter((item) => item)
              .map(
                (item, index) =>
                    showItem && (
                    <CategoryMenu key={index} item={item?.card?.info} />
                  )
              )}
          </div>
          
        </div>

    //list accordian body
  );
};
