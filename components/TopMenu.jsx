import React from "react";
import Link from "next/link";

import Divider from "./Divider";

const TopMenu = () => {
  return (
    <div>
      <div className=" flex justify-between items-center py-5">
        {/* menu */}
        <div className=" flex gap-3 h4-caption-semibold">
          <Link className="btn-text active" href="/">
            Главная
          </Link>
          <Link className="btn-text" href="/promotions">
            Акции
          </Link>
          <Link className="btn-text" href="/aboutdelivery">
            О доставке
          </Link>
          <Link className="btn-text" href="/contacts">
            Контакты
          </Link>
          <Link className="btn-text" href="/jobs">
            Вакансии
          </Link>
          <Link className="btn-text  " href="/aboutus">
            GoodCity это...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
