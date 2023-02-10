import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const jobs = () => {
  return (
    <div className="my-container bg-gc-white p-6 flex flex-col min-h-screen desktop:my-2 laptop:my-2 tablet:my-0 mobile:my-0 ">
      <Header />
      <div className="flex flex-1 justify-center items-center">Вакансии</div>
      <Footer />
    </div>
  );
};

export default jobs;
