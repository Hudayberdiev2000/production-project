import React from "react"
import {useTranslation} from "react-i18next";
import {BugButton} from "shared/BugButton/BugButton";

export default function MainPage() {
  const {t} = useTranslation()
  return <div>
    <BugButton />
    {t("mainPage")}</div>
}
