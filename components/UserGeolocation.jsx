import React from "react";
import MapPinIcon from "@heroicons/react/24/solid/MapPinIcon";

const UserGeolocation = () => {
  return (
    <div className="flex items-center justify-center">
      <MapPinIcon className="h-5 pr-2" />
      <div>4,3 km (Донецк, Ворошиловский р-н, Артема 123)</div>
    </div>
  );
};

export default UserGeolocation;
