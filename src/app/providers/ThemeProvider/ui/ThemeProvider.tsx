import React, { useState } from "react"
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "app/providers/ThemeProvider/lib/ThemeContext"

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
