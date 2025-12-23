import React from "react";
import { useTranslation } from "react-i18next";
import Britlex from "../../assets/images/Britlex.png";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-gray-200 py-6 px-4 md:px-8 bg-white">
      <div className="max-w-[1440px] py-16 w-[90%] m-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="">
          <img src={Britlex} alt="" />
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-gray-500">
          <a
            href="#"
            className="hover:text-gray-900 hover:underline transition-colors"
          >
            {t("footer.terms")}
          </a>
          <span>•</span>
          <a
            href="#"
            className="hover:text-gray-900 hover:underline transition-colors"
          >
            {t("footer.privacy")}
          </a>
          <span>•</span>
          <a
            href="#"
            className="hover:text-gray-900 hover:underline transition-colors"
          >
            {t("footer.cookie")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
