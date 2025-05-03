import { classNames } from "shared/lib/classnames/classNames"
import styles from "./PageError.module.scss"
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }:PageErrorProps ) => {
    const {t} = useTranslation()
    const reloadPage = () => window.location.reload()
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            {t("Something went wrong")}
            <Button onClick={reloadPage}>
                {t("Refresh page")}
            </Button>
        </div>
    )
}
