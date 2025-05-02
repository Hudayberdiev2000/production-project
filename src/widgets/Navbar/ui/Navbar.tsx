import {FC} from "react"
import {classNames} from "shared/lib/classnames/classNames"
import styles from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>
                    Main page
                </AppLink>
                <AppLink to="/about">About page</AppLink>
            </div>
        </div>
    )
}

