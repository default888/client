import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RestaurantButtons from "@/components/RestaurantButtons";
import Logo from "@/components/Logo";

const index = ({ restaurants }) => {
  return (
    <div className="my-container bg-gc-white flex flex-col flex-grow p-6 desktop:my-2 laptop:my-2 tablet:my-0 mobile:my-0">
      <Header />
      {/* restaurant button */}
      <div className="flex justify-center flex-grow ">
        <div className=" flex gap-6 justify-between py-10">
          {/* logo button */}
          <div className=" w-[50%]  flex flex-col items-center justify-center">
            <div className="h1-caption-bold font-medium mb-10 text-gc-primary">
              Выберите ресторан
            </div>
            <RestaurantButtons btn={restaurants} />
          </div>
          {/* picture */}
          <div className=" w-[50%] flex items-center justify-center">
            <img src="./img/pictures/food.png" alt="food" className="" />
          </div>
        </div>
      </div>

      {/* goodcity description */}
      <div className="flex">
        <div className=" flex flex-col w-[45%] justify-center items-center">
          <img
            src="./img/pictures/hands-taking-pizza.png"
            alt="pizza"
            className="rotate-[-90deg] w-[512px]"
          />
        </div>
        <div className=" flex flex-col w-[50%] pl-4 justify-center my-4">
          <div className="h2-caption-bold flex justify-center text-gc-primary mb-6">
            Мы - это GoodCity
          </div>
          <div className=" mb-8">
            <span className="text-gc-primary">GoodCity</span> - фирменная служба доставки еды:
            пиццы, суши, роллов, бургеров и другой вкусной еды из сети наших кафе и ресторанов.
            Рестораны SunCity, RedCup, BeersTown, Ким-Бао и Адачи совместно с фирменной службой
            доставки еды GoodCity предлагает отличную возможность заказа ваших любимых блюд не
            выходя из дома или офиса. Для заказа еды вам всего лишь нужно позвонить по телефону или
            заказать онлайн.
          </div>
          <div>
            <div className="h2-caption-bold flex justify-center text-gc-primary mb-6">
              Мы можем Вам предложить:
            </div>
            <div className="mb-8">
              <ul>
                <li> - Американское меню (бургеры, стейки, булкапы, круассаны и т.д.)</li>
                <li>- Европейское меню (пиццы, паста, равиоли, лазанья и т.д.)</li>
                <li>- Японское меню (роллы, суши, гунканы и т.д.)</li>
                <li>- Соки</li>
                <li>- Напитки</li>
                <li>- Крафтовое пиво</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="h2-caption-bold flex justify-center text-gc-primary mb-6">
              Для заказа вкусной еды нужно всего лишь:
            </div>
            <div>
              <ul className=" mb-3">
                <li>1. Выбрать нужный ресторан.</li>
                <li>2. Поместить в корзину понравившиеся вам блюда.</li>
                <li>3. Отправить заказ.</li>
              </ul>
              В течении часа наш курьер доставит Ваш заказ точно по адресу в любой район Донецка (из
              заведений Adachi, Red Cup, Beerstown, Сыр&Мясо, Ким-Бао, Sun City Донецк) и Макеевки
              (из заведения Sun City Макеевка).
            </div>
          </div>
        </div>
      </div>
      {/* banner discount */}
      <div className="mt-4 mb-10 rounded-xl flex items-center justify-center ">
        <img src="./img/banners/banner_discount.jpg" alt="" className=" rounded-2xl shadow-lg" />
      </div>

      <Footer />
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("http://localhost:1200/restaurant");
  const restaurants = await response.json();

  return {
    props: {
      restaurants,
    },
  };
}

export default index;
