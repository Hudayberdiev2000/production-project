import { classNames } from "shared/lib/classnames/classNames"
import styles from "./NotFoundPage.module.scss"
import {useTranslation} from "react-i18next";

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }:NotFoundPageProps ) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            {t("page-not-found")}
        </div>
    )
}
