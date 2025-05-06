import { classNames } from "shared/lib/classnames/classNames"
import styles from "./Button.module.scss"
import {ButtonHTMLAttributes, FC} from "react";

export  enum ButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
}

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props ) => {
    const {className, theme, children, ...otherProps} = props
    return (
        <button {...otherProps} className={classNames(styles.Button, {}, [className, styles[theme]])}>
            {children}
        </button>
    )
}
