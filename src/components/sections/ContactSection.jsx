import React from "react";
import image1 from "../../assets/images/image1.png";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-[1440px] py-16 w-[90%] m-auto">
      <div className="container flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 flex justify-center">
          <img src={image1} alt="Contact" className="w-full max-w-md h-auto" />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {t("contact.title")}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {t("contact.paragraph")}
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder={t("contact.inputPlaceholder")}
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 cursor-pointer py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              {t("contact.button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
