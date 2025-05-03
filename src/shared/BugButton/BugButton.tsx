import { classNames } from "shared/lib/classnames/classNames"
import {useEffect, useState} from "react";

interface BugButtonProps {
    className?: string
}

export const BugButton = ({ className }:BugButtonProps ) => {
    const [error, setError] = useState(false)
    const onThrow = () => setError(true)
    useEffect(() => {
        if (!error) return
        throw new Error()
    }, [error]);
    return (
        <button onClick={onThrow} className={classNames("", {}, [className])}>
            throw error
        </button>
    )
}
