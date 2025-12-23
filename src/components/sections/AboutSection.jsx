import React from "react";
import Business from "../../assets/images/Business.png";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-[1440px] py-16 w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-[50%]">
        <h2 className="font-semibold text-5xl text-black leading-[167%]">
          {t("about.title")}
        </h2>

        <p className="font-normal text-xl text-[#8f95a5]">
          {t("about.paragraph")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full sm:w-[70%] mt-10">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-5xl text-[#2a3246]">800</p>
            <p className="font-normal text-xl text-[#8f95a5]">
              {t("about.pupils")}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold text-5xl text-[#2a3246]">18</p>
            <p className="font-normal text-xl text-[#8f95a5]">
              {t("about.teachers")}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold text-5xl text-[#2a3246]">6</p>
            <p className="font-normal text-xl text-[#8f95a5]">
              {t("about.languages")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-auto mt-10 lg:mt-0 flex justify-center">
        <img src={Business} alt="About" className="max-w-full h-auto" />
      </div>
    </section>
  );
};

export default AboutSection;
