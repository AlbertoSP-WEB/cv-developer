const dictionaries = {
  es: () => import("./es").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
};

export const locales = Object.keys(dictionaries);

export const hasLocale = (locale) => locale in dictionaries;

export const getDictionary = async (locale) => dictionaries[locale]();
