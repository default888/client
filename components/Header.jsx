import React from "react";
import Link from "next/link";
import TopMenu from "./TopMenu";
import Search from "./Search";
import Divider from "./Divider";
import Button from "./Button";
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";

const Header = () => {
  return (
    <div className=" flex flex-col">
      <div className="flex justify-between gap-4">
        <Link href="/" className=" flex  items-start">
          <img src="/img/logo/goodcity_3.svg" alt="logo" className=" w-44" />
        </Link>
        <div className="flex flex-col gap-4 ">
          <Search />
          <div className="flex justify-center items-center gap-4">
            <TopMenu />
            <img src="/img/phone_number.svg" alt="short number" className=" h-12" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className=" flex justify-center items-center gap-1">
            <UserCircleIcon className=" h-5" />
            <div className="flex items-center justify-center">
              <Link href="/registration" className=" mt-[2px] body-text-small btn-text">
                Вход
              </Link>
              <div>|</div>
              <Link href="/registration" className=" mt-[2px] body-text-small btn-text">
                Регистрация
              </Link>
            </div>
          </div>
          <div className="flex justify-center ">
            <Link
              href="/cart"
              className="flex justify-center items-center gap-2 text-gc-white bg-gc-primary rounded-[6px] p-[10px] hover:shadow-md transition-shadow ">
              <div className="flex items-center justify-between mr-2">
                <div className="relative">
                  <div
                    className=" flex items-center justify-center
                                      bg-gc-white text-gc-primary
                                      border-[1px] border-gc-primary
                                      h-5 min-w-[20px]  h5-caption-bold rounded-full  shadow-sm
                                       left-4 -top-2 absolute">
                    <div className="flex gap-2 leading-none mt-[2px] p-[2px] text-[10px] text-emerald-400">
                      10
                    </div>
                  </div>
                  <ShoppingCartIcon className=" h-6" />
                </div>
              </div>
              <span>5400 руб</span>
            </Link>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default Header;
