import React from 'react'
import { ThemeContext } from './provider'

export { ThemeProvider } from './provider'
export { ThemeSwitcher } from './switcher'
export const useTheme = () => React.useContext(ThemeContext)
