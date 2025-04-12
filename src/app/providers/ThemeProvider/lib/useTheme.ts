import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"


interface useThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return {
        theme: theme,
        toggleTheme: toggleTheme
    }
}