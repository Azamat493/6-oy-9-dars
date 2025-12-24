import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pagination } from "antd";
import Online from "../../assets/images/Online.png";
import Online1 from "../../assets/images/Online1.png";
import Online2 from "../../assets/images/Online2.png";

const PricingSection = () => {
  const { t } = useTranslation();

  const page1Plans = [
    {
      img: Online,
      titleKey: "pricing.plan1",
      descKey: "pricing.desc1",
      price: "5.99",
    },
    {
      img: Online1,
      titleKey: "pricing.plan2",
      descKey: "pricing.desc2",
      price: "9.99",
    },
    {
      img: Online2,
      titleKey: "pricing.plan3",
      descKey: "pricing.desc3",
      price: "19.99",
    },
  ];

  const page2Plans = [
    {
      img: Online,
      titleKey: "pricing.plan4",
      descKey: "pricing.desc4",
      price: "7.99",
    },
    {
      img: Online1,
      titleKey: "pricing.plan5",
      descKey: "pricing.desc5",
      price: "12.99",
    },
    {
      img: Online2,
      titleKey: "pricing.plan6",
      descKey: "pricing.desc6",
      price: "24.99",
    },
  ];

  const page3Plans = [
    {
      img: Online,
      titleKey: "pricing.plan7",
      descKey: "pricing.desc7",
      price: "4.49",
    },
    {
      img: Online1,
      titleKey: "pricing.plan8",
      descKey: "pricing.desc8",
      price: "15.99",
    },
    {
      img: Online2,
      titleKey: "pricing.plan9",
      descKey: "pricing.desc9",
      price: "49.99",
    },
  ];

  const allPages = [page1Plans, page2Plans, page3Plans];
  const [currentPage, setCurrentPage] = useState(1);
  const currentPlans = allPages[currentPage - 1] || [];

  return (
    <section className="max-w-[1440px] py-16 w-[90%] m-auto px-4">
      <h2 className="text-center font-semibold text-2xl md:text-3xl lg:text-[48px] text-black mb-6 md:mb-8 lg:mb-12">
        {t("pricing.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPlans.map((plan, index) => (
          <div
            key={`${currentPage}-${index}`}
            className="flex flex-col justify-between"
          >
            <img
              src={plan.img}
              alt={t(plan.titleKey)}
              className="h-60 object-contain mx-auto"
            />
            <div className="flex flex-col gap-4 mt-6">
              <h2 className="font-semibold text-[30px] text-[#263238] text-center">
                {t(plan.titleKey)}
              </h2>
              <p className="text-xl text-[#8f95a5] text-center">
                {t(plan.descKey)}
              </p>
              <button className="bg-gray-200 rounded-lg px-4 py-2 text-lg text-[#546269] w-fit mx-auto">
                <span className="text-[25px] text-[#263238] font-medium">
                  £{plan.price}
                </span>
                {t("pricing.perMonth")}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Pagination
          current={currentPage}
          total={allPages.length}
          pageSize={1}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </section>
  );
};

export default PricingSection;
