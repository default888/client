import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { CurrencyEuroIcon } from "@heroicons/react/24/solid";
import Divider from "./Divider";

const Footer = () => {
  return (
    <>
      <Divider />
      <div className="flex justify-between text-gc-text-dark-gray flex-wrap">
        {/* GoodCity */}
        <div className="  p-4 flex flex-col  w-[25%]">
          <Image
            src="./img/logo/goodcity_3_invert.svg"
            width={230}
            height={1}
            alt="logo"
            className=" mb-6"
          />
          <div className=" ">
            Сеть кафе и ресторанов GoodCity предоставляет усовершенствованную услугу "служба
            доставки еды" в г. Донецк и Макеевке
          </div>

          <div className=" mt-4 flex flex-wrap items-center">
            <Link href="/restaurant" className=" btn-text h5-caption-bold">
              SunCity
            </Link>
            <span>|</span>
            <Link href="/restaurant" className=" btn-text h5-caption-bold">
              АДАЧИ
            </Link>
            <span>|</span>
            <Link href="/restaurant" className=" btn-text h5-caption-bold">
              RedCups
            </Link>
            <span>|</span>
            <Link href="/restaurant" className=" btn-text h5-caption-bold">
              Beerstown
            </Link>
            <span>|</span>
            <Link href="/restaurant" className=" btn-text h5-caption-bold">
              SunCity Макеевка
            </Link>
            <span>|</span>
            <Link href="/restaurant" className=" btn-text h5-caption-bold">
              Кейтеринг
            </Link>
            <span>|</span>
            <Link href="/restaurant" className=" btn-text h5-caption-bold ">
              Kim-Bao
            </Link>
          </div>
        </div>

        {/* Информация */}
        <div className="  p-4 flex flex-col">
          <div className="h3-caption-semibold text-gc-primary mb-2 flex justify-center">
            Информация
          </div>
          <ul className="body-text-small flex flex-col ">
            <li>
              <Link className=" btn-text flex items-center" href="/aboutDelivery">
                <ChevronRightIcon className=" w-5" />
                <div>Служба доставки</div>
              </Link>
            </li>
            <li>
              <Link className=" btn-text flex items-center" href="/aboutPayment">
                <ChevronRightIcon className=" w-5" />
                <div>Оплата</div>
              </Link>
            </li>
            <li>
              <Link className=" btn-text flex items-center" href="/termsOfDelivery">
                <ChevronRightIcon className=" w-5" />
                <div>Стоимость доставки</div>
              </Link>
            </li>
            <li>
              <Link className=" btn-text flex items-center" href="/team">
                <ChevronRightIcon className=" w-5" />
                <div>Команда</div>
              </Link>
            </li>
            <li>
              <Link className=" btn-text flex items-center" href="/promotions">
                <ChevronRightIcon className=" w-5" />
                <div>Программа лояльности</div>
              </Link>
            </li>
            <li>
              <Link className=" btn-text flex items-center" href="/jobs">
                <ChevronRightIcon className=" w-5" />
                <div>Вакансии</div>
              </Link>
            </li>
          </ul>
          <div className=" mt-3">
            <Link className=" flex items-center btn-text" href="/">
              <PhoneIcon className=" w-5 text-gc-primary" />
              <div className=" pl-2 uppercase text-sm underline ">Заказ по телефону</div>
            </Link>
          </div>
        </div>

        {/* Для клиента */}
        <div className="  p-4 flex flex-col ">
          <div className="h3-caption-semibold text-gc-primary mb-2 flex justify-center">
            Для клиента
          </div>
          <ul className="body-text-small flex flex-col ">
            <li>
              <Link className=" btn-text flex items-center" href="/">
                <ChevronRightIcon className=" w-5" />
                <div>История заказов</div>
              </Link>
            </li>
            <li>
              <Link className=" btn-text flex items-center" href="/cart">
                <ChevronRightIcon className=" w-5" />
                <div>Корзина</div>
              </Link>
            </li>
            <li>
              <Link className=" btn-text flex items-center" href="/promotions">
                <ChevronRightIcon className=" w-5" />
                <div>Акции</div>
              </Link>
            </li>
            <li>
              <Link className=" btn-text flex items-center" href="/">
                <ChevronRightIcon className=" w-5" />
                <div>Ваши скидки</div>
              </Link>
            </li>
            <li>
              <Link className=" btn-text flex items-center" href="/termsOfDelivery">
                <ChevronRightIcon className=" w-5" />
                <div>Минимальный заказ</div>
              </Link>
            </li>
          </ul>
          <div className=" mt-3">
            <Link className=" flex items-center btn-text" href="/">
              <PhoneIcon className=" w-5 text-gc-primary" />
              <div className=" pl-2 uppercase text-sm underline ">Связаться с менеджером</div>
            </Link>
          </div>
        </div>

        {/* Контакты */}
        <div className="  p-4 flex flex-col  gap-2">
          <div className="h3-caption-semibold text-gc-primary mb-2 flex justify-center">
            Контакты
          </div>
          <div>
            <span className=" text-gc-primary">Адрес:</span> г. Донецк /г. Макеевка
          </div>
          <div>
            <div className=" text-gc-primary">Телефоны:</div>
            <div className=" ml-4">
              <div>
                - службы доставки <span className=" text-gc-primary">+7(949) 123 45 67</span>
              </div>
              <div>
                - короткий номер <span className=" text-gc-primary">606</span>
              </div>
            </div>
          </div>
          <div>
            <span className=" text-gc-primary">Время заказа: </span>с 09:00 до 21:30
          </div>
          <div>
            <span className=" text-gc-primary">Email:</span> info@goodcity.com
          </div>
          <div className=" mt-3 flex gap-3 items-center">
            <Link
              href="https://vk.com/"
              target="_blank"
              className=" w-10 h-10 flex items-center justify-center ">
              <CurrencyEuroIcon />
            </Link>
            <Link
              href="https://facebook.com/"
              target="_blank"
              className=" w-10 h-10 flex items-center justify-center ">
              <CurrencyEuroIcon />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              className=" w-10 h-10 flex items-center justify-center ">
              <CurrencyEuroIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
