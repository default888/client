import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Divider from "./Divider";

const TopMenu = () => {
  const router = useRouter();
  return (
    <div>
      <div className=" flex justify-between items-center py-5">
        {/* menu */}
        <div className=" flex gap-3 h4-caption-semibold">
          <Link
            className={`btn-text ${router.pathname == "/" ? "active" : ""}`}
            href="/"
          >
            Главная
          </Link>
          <Link
            className={`btn-text ${
              router.pathname == "/promotions" ? "active" : ""
            }`}
            href="/promotions"
          >
            Акции
          </Link>
          <Link
            className={`btn-text ${
              router.pathname == "/aboutdelivery" ? "active" : ""
            }`}
            href="/aboutdelivery"
          >
            О доставке
          </Link>
          <Link
            className={`btn-text ${
              router.pathname == "/contacts" ? "active" : ""
            }`}
            href="/contacts"
          >
            Контакты
          </Link>
          <Link
            className={`btn-text ${router.pathname == "/jobs" ? "active" : ""}`}
            href="/jobs"
          >
            Вакансии
          </Link>
          <Link
            className={`btn-text ${
              router.pathname == "/aboutus" ? "active" : ""
            }`}
            href="/aboutus"
          >
            GoodCity это...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
