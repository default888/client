import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  const [placeholderText, setplaceholderText] = useState("Поиск...");
  return (
    <div className="flex flex-grow items-center h-9 rounded-lg hover:shadow-md transition-shadow">
      <button className="bg-gc-gray-light h-full w-10 flex items-center justify-center rounded-l-lg">
        <MagnifyingGlassIcon className=" w-5 hover:text-gc-primary transition-colors" />
      </button>
      <input
        type="text"
        className="bg-gc-gray-light text-sm px-2 h-full w-full outline-none rounded-r-lg focus:outline-none placeholder:text-gc-primary placeholder:opacity-70"
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
