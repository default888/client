import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import Divider from "./Divider";

const TopMenu = () => {
  return (
    <div>
      <div className=" flex justify-between items-center py-5">
        {/* logo */}
        <div className=" flex gap-3 items-center">
          <Image src="/img/logo/logo.svg" width={35} height={1} alt="logo" />
          <Image src="/img/logo/goodcity_3.svg" width={150} height={1} alt="logo" />
        </div>
        {/* menu */}
        <div className=" flex gap-3 h4-caption-semibold">
          <Link className="btn-text active" href="/">
            Главная
          </Link>
          <Link className="btn-text" href="/promotions">
            Акции
          </Link>
          <Link className="btn-text" href="/aboutDelivery">
            О доставке
          </Link>
          <Link className="btn-text" href="/contacts">
            Контакты
          </Link>
          <Link className="btn-text" href="/jobs">
            Вакансии
          </Link>
          <Link className="btn-text  " href="/aboutUs">
            GoodCity это...
          </Link>
        </div>
        {/* search */}
        <Search />
      </div>
      <Divider />
    </div>
  );
};

export default TopMenu;
