import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import RestaurantMenuItem from "@/components/RestaurantMenuItem";
import Logo from "@/components/Logo";
import ProductCard from "@/components/ProductCard";
import RestaurantDescription from "@/components/RestaurantDescription";
import UserGeolocation from "@/components/UserGeolocation";
import Button from "@/components/Button";
import StarSolid from "@heroicons/react/24/solid/StarIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";
import ProductCardFavorites from "@/components/ProductCardFavorites";

const Resataurant = ({ restaurant }) => {
  const [payment, setPayment] = useState("Средний чек - 1.000 руб.");
  const [showMenu, setshowMenu] = useState(false);
  const showMenuToggle = () => setshowMenu(!showMenu);

  const setPaymentText = () => {
    restaurant.name === "cake" && setPayment("От 3.000 руб");
    restaurant.name === "choco" && setPayment("Средний чек - 460 руб");
  };

  const [filterCategory, setFilterCategory] = useState(0);

  useEffect(() => {
    setPaymentText();
  }, []);
  return (
    <>
      <Head>
        <title>GoodCity | {restaurant && restaurant.displayName}</title>
      </Head>
      <div className="my-container bg-gc-white p-6 flex flex-col flex-grow desktop:my-2 laptop:my-2 tablet:my-0 mobile:my-0 ">
        <Header />
        <div className="flex gap-8">
          <div className="bg-gc-gray-light min-h-full p-6 rounded-2xl w-64 shadow-md min-w-[256px]">
            <h1 className=" flex items-center justify-center h4-caption-semibold uppercase text-gc-primary mb-5">
              Блюдо дня
            </h1>
            <ProductCardFavorites
            // key={item.id}
            // restaurantName={restaurant.name}
            // name={item.name}
            // price={item.price}
            // thumbnail={item.thumbnail}
            />
            <div className="flex items-center justify-center rounded-2xl h4-caption-semibold uppercase text-gc-primary mb-5 mt-12">
              Меню
            </div>
            {restaurant.menu.length > 0 && (
              <div>
                {restaurant &&
                  restaurant.menu.map((item) =>
                    !item.subMenu ? (
                      <div
                        key={item.id}
                        onClick={() => setFilterCategory(item.id)}
                        className="body-text-normal btn-list">
                        {item.items.length > 0 && <RestaurantMenuItem menuItem={item.title} />}
                      </div>
                    ) : (
                      <div key={item.id}>
                        <div
                          key={item.id}
                          onClick={showMenuToggle}
                          className="body-text-normal flex gap-2 btn-list">
                          <RestaurantMenuItem menuItem={item.title} />
                          <ChevronUpIcon className="h-5 text-gc-primary mt-[2px] btn-arrow" />
                          <ChevronDownIcon className="h-5 text-gc-primary mt-[2px] btn-arrow hidden" />
                        </div>
                        {showMenu &&
                          item.subMenu.map((item) => (
                            <div
                              key={item.id}
                              onClick={() => setFilterCategory(item.id)}
                              className="pl-4 body-text-small btn-list">
                              <RestaurantMenuItem menuItem={item.title} />
                            </div>
                          ))}
                      </div>
                    )
                  )}
              </div>
            )}
          </div>
          <div className="w-full">
            {/* header restaurant */}
            <div className="flex flex-col">
              <div className=" flex flex-col items-center justify-center ">
                <img
                  src={`/img/restaurants-headers/${restaurant.headerImg}`}
                  alt=""
                  className=" h-60 -mb-12 w-full rounded-2xl object-cover shadow-md"
                />
                <div className="border-gc-white bg-gc-white p-1 rounded-[13px] scale-110">
                  <Logo logoName={restaurant.logo} />
                </div>
              </div>
            </div>
            <div className=" flex justify-between  items-center w-full mt-5">
              <h1 className="h1-caption-bold text-gc-text-dark-blue">{restaurant.displayName}</h1>
              {(restaurant.menu.length > 0 || restaurant.name === "suncity-makeyevka") && (
                <div className="flex gap-3">
                  <Button text="О доставке" color="bg-[#503e9d]" textcolor="text-gc-primary" />
                  <Button text="Акции" color="bg-[#fd7222]" textcolor="text-gc-secondary" />
                  <div className="flex justify-center items-center px-4 py-[6px] rounded-[6px] bg-[#a3a3a4] bg-opacity-20 text-sm text-gc-text-dark-blue">
                    Работаем с 9:00
                  </div>
                </div>
              )}
            </div>
            <div className="py-6">
              <RestaurantDescription displayName={restaurant.displayName} />
            </div>
            {(restaurant.menu.length > 0 || restaurant.name === "suncity-makeyevka") && (
              <div className="flex gap-6 items-center">
                <div className="flex gap-2 justify-start items-center">
                  <StarSolid className="h-5 text-yellow-400 " />
                  <div className="h4-caption-bold text-gc-text-dark-blue mt-[2px]">4,6</div>
                  <div className="  mt-[2px]">(1,724)</div>
                </div>
                <div className=" flex gap-2 items-center justify-center">
                  <CurrencyDollarIcon className="h-5" />
                  <div>{payment} </div>
                </div>
                <UserGeolocation />
              </div>
            )}

            {/*########################### ----- FILTRATION ----- ########################### */}
            <div className="flex gap-11 mt-4 ">
              {(restaurant.menu.length > 0 || restaurant.name === "suncity-makeyevka") &&
                (filterCategory == 0 ? (
                  <div className="flex flex-1 justify-center flex-wrap gap-10 rounded-2xl">
                    {restaurant.menu.map((item) =>
                      !item.subMenu
                        ? item.items &&
                          item.items.map((item) => (
                            <ProductCard
                              key={item.id}
                              restaurantName={restaurant.name}
                              name={item.name}
                              price={item.price}
                              thumbnail={item.thumbnail}
                            />
                          ))
                        : item.subMenu.map(
                            (item) =>
                              item.items &&
                              item.items.map((item) => (
                                <ProductCard
                                  key={item.id}
                                  restaurantName={restaurant.name}
                                  name={item.name}
                                  price={item.price}
                                  thumbnail={item.thumbnail}
                                />
                              ))
                          )
                    )}
                  </div>
                ) : (
                  <div className="flex flex-1 justify-center flex-wrap gap-10 rounded-2xl">
                    {restaurant.menu.map((item) =>
                      filterCategory == item.id && !item.subMenu
                        ? item.items.map((item) => (
                            <ProductCard
                              key={item.id}
                              restaurantName={restaurant.name}
                              name={item.name}
                              price={item.price}
                              thumbnail={item.thumbnail}
                            />
                          ))
                        : item.subMenu?.map(
                            (item) =>
                              filterCategory == item.id &&
                              item.items.map((item) => (
                                <ProductCard
                                  key={item.id}
                                  restaurantName={restaurant.name}
                                  name={item.name}
                                  price={item.price}
                                  thumbnail={item.thumbnail}
                                />
                              ))
                          )
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
//   {item.id}
//  {item.name}
//  {item.price}
//  {item.description}
//  {item.image}
//  {item.thumbnail}
export async function getStaticPaths() {
  const response = await fetch("http://localhost:1200/restaurant");
  const restaurants = await response.json();
  const paths = restaurants.map((item) => ({
    params: { restaurant: item.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:1200/restaurant/${params.restaurant}`);
  const restaurant = await response.json();

  return {
    props: {
      restaurant,
    },
  };
}

export default Resataurant;
