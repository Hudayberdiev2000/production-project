import {classNames} from "shared/lib/classnames/classNames"
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }:LangSwitcherProps ) => {
    const {t, i18n} = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "tk" : "en")
    }

    return (
        <div className={classNames("", {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleLanguage}>
                {t("translation")}
            </Button>

        </div>
    )
}
