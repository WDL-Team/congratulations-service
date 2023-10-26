import React from 'react'
import { ThemeContext } from './ThemeProvider'

export { ThemeProvider } from './ThemeProvider'
export { ThemeSwitcher } from './ThemeSwitcher'
export const useTheme = () => React.useContext(ThemeContext)
