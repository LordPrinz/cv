import { RESUME_DATA as en } from "./en";

const laguases = ["en"];

export const getResumeData = (lang: string) => {
  if (!laguases.includes(lang)) {
    return en;
  }

  if (lang === "en") {
    return en;
  }
  return en;
};
