import React, { useState } from "react";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";

const RestaurantMenuItem = ({ menuItem, id }) => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div className=" flex flex-col justify-center items-start">
      {menuItem.toLowerCase().replace(/((?:^|[.?!])+\s*)(.)/g, (_, tail, ch) => {
        return tail + ch.toUpperCase();
      })}
    </div>
  );
};

export default RestaurantMenuItem;
