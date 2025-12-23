import React from "react";
import { useTranslation } from "react-i18next";
import Online from "../../assets/images/Online.png";
import Online1 from "../../assets/images/Online1.png";
import Online2 from "../../assets/images/Online2.png";

const PricingSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1440px] py-16 w-[90%] m-auto px-4">
      <h2 className="text-center font-semibold text-2xl md:text-3xl lg:text-[48px] text-black mb-6 md:mb-8 lg:mb-12">
        {t("pricing.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col justify-between">
          <img
            src={Online}
            alt={t("pricing.plan1")}
            className="h-60 object-contain"
          />
          <div className="flex flex-col gap-4 mt-6">
            <h2 className="font-semibold text-[30px] text-[#263238]">
              {t("pricing.plan1")}
            </h2>
            <p className="text-xl text-[#8f95a5]">{t("pricing.desc1")}</p>
            <button className="bg-gray-200 rounded-lg px-4 py-2 text-lg text-[#546269] w-fit">
              <span className="text-[25px] text-[#263238] font-medium">
                £5.99
              </span>
              {t("pricing.perMonth")}
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <img
            src={Online1}
            alt={t("pricing.plan2")}
            className="h-60 object-contain"
          />
          <div className="flex flex-col gap-4 mt-6">
            <h2 className="font-semibold text-[30px] text-[#263238]">
              {t("pricing.plan2")}
            </h2>
            <p className="text-xl text-[#8f95a5]">{t("pricing.desc2")}</p>
            <button className="bg-gray-200 rounded-lg px-4 py-2 text-lg text-[#546269] w-fit">
              <span className="text-[25px] text-[#263238] font-medium">
                £9.99
              </span>
              {t("pricing.perMonth")}
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <img
            src={Online2}
            alt={t("pricing.plan3")}
            className="h-60 object-contain"
          />
          <div className="flex flex-col gap-4 mt-6">
            <h2 className="font-semibold text-[30px] text-[#263238]">
              {t("pricing.plan3")}
            </h2>
            <p className="text-xl text-[#8f95a5]">{t("pricing.desc3")}</p>
            <button className="bg-gray-200 rounded-lg px-4 py-2 text-lg text-[#546269] w-fit">
              <span className="text-[25px] text-[#263238] font-medium">
                £19.99
              </span>
              {t("pricing.perMonth")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
