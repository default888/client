import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const RestaurantButtons = ({ btn }) => {
  return (
    <div className=" flex gap-5 flex-wrap justify-center">
      {btn &&
        btn.map((item) => (
          <Link
            key={item._id}
            href={`/restaurant/${item.name}`}
            className=" logo-hover shadow-md rounded-lg">
            <Logo key={item._id} logoName={item.logo} />
          </Link>
        ))}
    </div>
  );
};

export default RestaurantButtons;
