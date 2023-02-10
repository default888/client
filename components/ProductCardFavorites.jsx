import React from "react";
import Button from "./Button";
import StarSolid from "@heroicons/react/24/solid/StarIcon";

const ProductCardFavorites = ({ product, restaurantName, name, price, thumbnail }) => {
  return (
    <div className="w-full bg-gc-white h-72 mb-6 shadow rounded-lg flex flex-col items-center relative hover:shadow-lg hover:scale-105 hover:cursor-pointer transition-all">
      {/* <img
        src={
          thumbnail !== "no_photo.jpg"
            ? `/img/productImages/thumbnail/${thumbnail}`
            : `/img/productImages/thumbnail/no_photo.svg`
        }
        alt="product image"
        className=" h-44 w-full object-cover rounded-xl -mb-5"
      /> */}

      <div className=" flex flex-col items-center">
        <img
          src="/img/productImages/thumbnail/0ef19041fe14ff01b7ba69824d0f8ead.jpg"
          alt=""
          className=" h-30 w-full rounded-lg -mb-5"
        />
        <div className="flex flex-col items-center justify-center bg-gc-white min-w-20 rounded-md shadow p-1 h5-caption-semibold text-gc-primary ">
          <span className="line-through">1 429 руб.</span>
          <span className=" text-rose-600">1000 руб.</span>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-between h-full p-2 ">
        <div className=" text-lg">Стейк лосося</div>
        <Button text="В корзину" color="bg-[#503e9d]" textcolor="text-gc-primary" />
        <div className="flex caption-1-lh-16 justify-between px-2 gap-3">
          <div className=" flex items-center justify-center gap- ">
            <StarSolid className="h-4 text-yellow-400" />
            <div className="h6-caption-bold-capitalized text-gc-text-dark-blue mt-[2px]">4,8</div>
            <div className="caption-1-lh-18  mt-[2px]">(77)</div>
          </div>

          <div className=" flex gap- justify-center items-center ">
            <img src="/icons/deliveryIcon.svg" alt="cutlery" className=" h-[18px]" />
            <div className=" mt-[2px] tracking-tighter">"60 - 80 мин."</div>
          </div>
        </div>
      </div>
      <div className=" text-xs text-gc-white bg-rose-500 h-12 w-12 flex items-center justify-center rounded-full p-1 absolute -top-4 -right-3 border-2 border-gc-gray-light">
        - 30%
      </div>
    </div>
  );
};

export default ProductCardFavorites;
