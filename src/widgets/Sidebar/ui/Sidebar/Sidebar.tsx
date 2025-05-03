import { classNames } from "shared/lib/classnames/classNames"
import styles from "./Sidebar.module.scss"
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }:SidebarProps ) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => setCollapsed(!collapsed)

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    )
}