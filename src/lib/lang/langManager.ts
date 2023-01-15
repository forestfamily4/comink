import i18next from "i18next";
import locales from "./locales";
import { initReactI18next } from "react-i18next";

type Lang = "en" | "ja";

export const initLang = (la: Lang) => {
  i18next.use(initReactI18next).init(
    {
      lng: la,
      debug: true,
      resources: locales,
    },
    () => {}
  );
};

export const changeLang = (la: Lang) => {};
