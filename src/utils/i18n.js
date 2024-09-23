// src/utils/i18n.js
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// 导入语言文件
import enTranslation from "../locales/en/translation.json";
import zhCNTranslation from "../locales/zh-CN/translation.json";

// 定义资源
const resources = {
    en: {
        translation: enTranslation,
    },
    "zh-CN": {
        translation: zhCNTranslation,
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        detection: {
            order: ["cookie", "htmlTag", "localStorage", "navigator"],
            caches: ["cookie"],
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
