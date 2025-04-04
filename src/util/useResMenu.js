import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResMenu = (resId) => {
  const [resData, setResData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu(resId);
  }, []);

  const fetchMenu = async (resId) => {
    try {
      const data = await fetch(
        `${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const json = await data.json();
      setResData(json.data);
    } catch (err) {
      console.error("Error fetching menu:", err);
      setError(err);
    }
  };

  return resData;
};

export default useResMenu;
