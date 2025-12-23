import React from "react";
import { useTranslation } from "react-i18next";
import goals from "../../assets/images/goals.png";
import goals1 from "../../assets/images/goals1.png";
import goals2 from "../../assets/images/goals2.png";
import goals3 from "../../assets/images/goals3.png";

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1440px] w-[90%] m-auto">
      <h2 className="text-center font-semibold text-2xl md:text-3xl lg:text-[48px] text-black leading-normal lg:leading-[167%] mb-6 md:mb-8 lg:mb-12">
        {t("features.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-3">
        <div className="h-auto lg:h-[894px] bg-[#f5f5f5] p-4 md:p-5 flex flex-col items-start justify-between lg:row-start-1 lg:row-end-3 transition-all duration-300">
          <div className="w-full flex justify-center mb-4 lg:mb-0">
            <img src={goals} alt={t("features.speaking")} />
          </div>

          <div className="flex flex-col p-5 items-start gap-3 md:gap-4 w-full">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-[30px] text-[#263238]">
              {t("features.speaking")}
            </h2>
            <p className="font-normal text-sm md:text-base text-[#8f95a5] line-clamp-3">
              {t("features.speakingDesc")}
            </p>
            <button className="bg-[#263238] p-2 md:p-3 font-medium text-sm md:text-lg text-white rounded-sm mt-2 w-full sm:w-auto">
              {t("features.button")}
            </button>
          </div>
        </div>

        <div className="h-auto lg:h-132.75 flex flex-col justify-between bg-[#f5f5f5] p-4 md:p-3 transition-all duration-300">
          <div className="w-full flex justify-center mb-4">
            <img
              src={goals1}
              alt={t("features.writing")}
              className="w-full h-auto max-h-32 md:max-h-40 lg:max-h-48 object-contain"
            />
          </div>

          <div className="flex p-5 flex-col items-start gap-2 md:gap-1">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-[30px] text-[#263238]">
              {t("features.writing")}
            </h2>
            <p className="font-normal text-sm md:text-base text-[#8f95a5] line-clamp-2 md:line-clamp-3">
              {t("features.writingDesc")}
            </p>
            <button className="bg-[#263238] p-2 md:p-3 font-medium text-sm md:text-lg text-white rounded-sm mt-2 w-full sm:w-auto">
              {t("features.button")}
            </button>
          </div>
        </div>

        <div className="h-auto lg:h-132.75 flex flex-col justify-between bg-[#f5f5f5] p-4 md:p-3 transition-all duration-300">
          <div className="w-full flex justify-center mb-4">
            <img
              src={goals2}
              alt={t("features.reading")}
              className="w-full h-auto max-h-32 md:max-h-40 lg:max-h-48 object-contain"
            />
          </div>

          <div className="flex p-5 flex-col items-start gap-2 md:gap-1">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-[30px] text-[#263238]">
              {t("features.reading")}
            </h2>
            <p className="font-normal text-sm md:text-base text-[#8f95a5] line-clamp-2 md:line-clamp-3">
              {t("features.readingDesc")}
            </p>
            <button className="bg-[#263238] p-2 md:p-3 font-medium text-sm md:text-lg text-white rounded-sm mt-2 w-full sm:w-auto">
              {t("features.button")}
            </button>
          </div>
        </div>

        <div className="h-auto p-5 lg:col-span-2 bg-[#f5f5f5] transition-all duration-300">
          <div className="flex  flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-3 p-4 md:p-3">
            <div className="flex flex-col items-start justify-between gap-2 md:gap-1 order-2 lg:order-1">
              <h2 className="font-semibold text-xl md:text-2xl lg:text-[30px] text-[#263238]">
                {t("features.listening")}
              </h2>
              <p className="font-normal text-sm md:text-base text-[#8f95a5]">
                {t("features.listeningDesc")}
              </p>
              <button className="bg-[#263238] p-2 md:p-3 font-medium text-sm md:text-lg text-white rounded-sm mt-2 w-full sm:w-auto">
                {t("features.button")}
              </button>
            </div>

            <div className="w-full flex justify-center order-1 lg:order-2">
              <img
                src={goals3}
                alt={t("features.listening")}
                className="w-full h-auto max-h-48 md:max-h-56 lg:max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
