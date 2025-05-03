import React from "react"
import {useTranslation} from "react-i18next";

export default function AboutPage() {
  const {t} = useTranslation("about")
  return <div>{t("aboutUs")}
  <div>{t("new transla")}</div>
  </div>
}
