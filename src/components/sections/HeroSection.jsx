import React from "react";
import { useTranslation } from "react-i18next";
import learning from "../../assets/images/learning.png";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1440px] w-[90%] m-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-4 items-center">
        <div className="flex flex-col items-start justify-between gap-10 md:gap-8 lg:gap-0 lg:justify-around order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full lg:w-[70%] font-semibold text-black leading-tight md:leading-normal lg:leading-[125%] group-hover:text-[#263238]/90 transition-colors duration-300">
            {t("hero.title")}
          </h1>
          <p className="w-full lg:w-[60%] text-[#8f95a5] font-normal text-base md:text-xl lg:text-2xl leading-relaxed md:leading-loose group-hover:text-[#8f95a5]/90 transition-colors duration-300">
            {t("hero.paragraph")}
          </p>
          <button
            className="
    bg-[#263238]
    mt-5
    cursor-pointer
    font-normal
    text-base md:text-lg lg:text-xl
    text-white
    px-6 md:px-8 lg:px-[27.75px]
    py-3 md:py-4
    rounded-[10px] md:rounded-[15px]
    transition-all duration-300 ease-out
    transform
    hover:bg-[#1c262b]
    hover:scale-105
    hover:shadow-[0_10px_30px_rgba(38,50,56,0.6)]
    active:scale-95
    w-full sm:w-auto text-center
  "
          >
            {t("hero.button")}
          </button>
        </div>
        <div className="order-1 lg:order-2 group">
          <img
            src={learning}
            alt="Hero"
            className="w-full h-auto max-w-full lg:max-w-none object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
