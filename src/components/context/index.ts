import React from 'react'
import { SettingsContext } from './provider'

export { SettingsProvider } from './provider'
export { ThemeSwitcher } from './switcher'
export const useSettings = () => React.useContext(SettingsContext)
