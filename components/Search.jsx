import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  const [placeholderText, setplaceholderText] = useState("Поиск...");
  return (
    <div className="flex items-center h-9 w-80 ">
      <button className="bg-gc-gray-light h-full w-10 flex items-center justify-center rounded-l-lg">
        <MagnifyingGlassIcon className=" w-5 " />
      </button>
      <input
        type="text"
        className="bg-gc-gray-light text-sm px-2 h-full w-full outline-none rounded-r-lg placeholder:text-gc-primary placeholder:opacity-70"
        placeholder={placeholderText}
        onFocus={() => {
          setplaceholderText("");
        }}
        onBlur={() => {
          setplaceholderText("Поиск...");
        }}
      />
    </div>
  );
};

export default Search;
