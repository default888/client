import React, { useEffect, useState } from "react";
import Button from "./Button";
import StarSolid from "@heroicons/react/24/solid/StarIcon";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";

const ProductCard = ({ product, restaurantName, name, price, thumbnail }) => {
  const [kitchen, setKitchen] = useState("Европейская");
  const [deliveryTime, setDeliveryTime] = useState("60 - 80 мин.");

  const setProductProperties = () => {
    (restaurantName === "adachi" || restaurantName === "kim-bao") && setKitchen("Паназиатская");
    restaurantName === "redcup" && setKitchen("Американская");
    restaurantName === "majorelle" && setKitchen("Восточная");
    restaurantName === "choco" && (setKitchen("Конфеты"), setDeliveryTime("от 3-х дней"));
    restaurantName === "cake" && (setKitchen("Торты/Пирожные"), setDeliveryTime("от 3-х дней"));
    restaurantName === "catering" && setDeliveryTime("Заказ за 3 дня");
    restaurantName === "beerstown" && setDeliveryTime("80 - 120 мин.");
  };

  useEffect(() => {
    setProductProperties();
  }, []);
  return (
    <div className="flex flex-col justify-between rounded-xl w-[336px] max-h-72 hover:shadow-lg hover:scale-105 hover:cursor-pointer transition-all">
      <div className=" flex flex-col items-center">
        <img
          src={
            thumbnail !== "no_photo.jpg"
              ? `/img/productImages/thumbnail/${thumbnail}`
              : `/img/productImages/thumbnail/no_photo.svg`
          }
          alt="product image"
          className=" h-44 w-full object-cover rounded-xl -mb-5"
        />
        <div className=" flex items-center justify-center bg-gc-white h-10 min-w-20 rounded-md shadow p-1 h5-caption-semibold text-gc-primary">
          {price} руб.
        </div>
      </div>
      <div className="flex p-2 flex-col gap-4">
        <div className=" flex justify-between items-center">
          <h1 className="h4-semi-bold text-gc-text-dark-blue h-5">{name}</h1>
          <div className=" flex items-center justify-center">
            <div className=" hidden flex-col pr-2 h-9">
              <ChevronUpIcon className="h-3" />
              <div className=" text-xs flex items-center justify-center">0</div>
              <ChevronDownIcon className="h-3" />
            </div>
            <Button text="В корзину" color="bg-[#503e9d]" textcolor="text-gc-primary" />
          </div>
        </div>
        <div className="flex caption-1-lh-16 justify-between px-2">
          <div className=" flex items-center justify-center gap-1 ">
            <StarSolid className="h-4 text-yellow-400" />
            <div className="h6-caption-bold-capitalized text-gc-text-dark-blue mt-[2px]">4,8</div>
            <div className="caption-1-lh-18  mt-[2px]">(77)</div>
          </div>
          <div className=" flex gap-1 justify-center items-center ">
            <img src="/icons/cutleryIcon.svg" alt="cutlery" className=" h-[12px]" />
            <div className="mt-[2px]">{kitchen}</div>
          </div>
          <div className=" flex gap-1 justify-center items-center ">
            <img src="/icons/deliveryIcon.svg" alt="cutlery" className=" h-[18px]" />
            <div className=" mt-[2px] tracking-tighter">{deliveryTime}</div>
          </div>
        </div>
      </div>
      {/* {product.length > 0 &&
        product
          .map((item) => item.items)
          .map((item) =>
            item?.map((item) => (
              <div className=" p-10 bg-gc-white rounded-lg w-[336px] h-64" key={item.id}>
                <div>id: {item.id}</div>
                <div>name: {item.name}</div>
                <div>price: {item.price}</div>
                <div>description: {item.description}</div>
                <div>image: {item.image}</div>
                <div>thumbnail: {item.thumbnail}</div>
              </div>
            ))
          )} */}
    </div>
  );
};

export default ProductCard;
