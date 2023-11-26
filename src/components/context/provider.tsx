import React from 'react'
import { ThemeArguments, ITheme } from '~/const/theme'
import { ThemeProvider as StThemeProvider } from 'styled-components'
import Store from '~/utils/Store'
import type { TSettings, TLanguage, TThemeVariants } from '~/types/settings'
import { supportedLanguages, defaultValues } from '~/types/settings'
import { getSytemTheme, getSystemLanguage } from '~/utils/getSystem'

const store = new Store()
const settings = store.get('settings') as TSettings
const sytemTheme = getSytemTheme() as TThemeVariants
let currentLanguage = getSystemLanguage() as TLanguage
if (!supportedLanguages.includes(currentLanguage)) currentLanguage = defaultValues.language

type ThemeVariantsFunc = (theme: TThemeVariants) => TThemeVariants

interface SettingsContextProps {
  themeName: TThemeVariants
  theme: ITheme
  setTheme: ((theme: TThemeVariants | ThemeVariantsFunc) => void) | (() => void)
  switchTheme: () => void
  lang: TLanguage
  setLanguage: (name: TLanguage) => void
}

export const SettingsContext = React.createContext<SettingsContextProps>({
  themeName: sytemTheme,
  get theme(): ITheme {
    return ThemeArguments[this.themeName]
  },
  setTheme: () => {},
  switchTheme: () => {},
  lang: currentLanguage,
  setLanguage: () => {},
})

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = React.useState<TThemeVariants>((settings.theme ?? sytemTheme) as TThemeVariants)
  const [lang, setCurrentLanguage] = React.useState<TLanguage>((settings.lang ?? currentLanguage) as TLanguage)

  const setTheme = (theme: TThemeVariants | ThemeVariantsFunc) => {
    const newTheme = theme instanceof Function ? theme(currentTheme) : theme
    setCurrentTheme(newTheme)
    store.set('settings.theme', newTheme)
  }

  const switchTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  const setLanguage = (lang: TLanguage) => {
    setCurrentLanguage(lang)
    store.set('settings.lang', lang)
  }

  return (
    <SettingsContext.Provider
      value={{
        themeName: currentTheme,
        theme: ThemeArguments[currentTheme],
        setTheme,
        switchTheme,
        lang,
        setLanguage,
      }}>
      <StThemeProvider theme={ThemeArguments[currentTheme]}>{children}</StThemeProvider>
    </SettingsContext.Provider>
  )
}
