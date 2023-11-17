import React from 'react'
import { ThemeArguments, ITheme, ThemeVariants } from '../../const/theme'
import { ThemeProvider as StThemeProvider } from 'styled-components'
import Store from '../../utils/Store'
import { ISettings } from '../../types/settings'

const store = new Store()
const settings = store.get('settings') as ISettings

type TLang = 'en' | 'ru'
type ThemeVariantsFunc = (theme: ThemeVariants) => ThemeVariants

interface SettingsContextProps {
  themeName: ThemeVariants
  theme: ITheme
  setTheme: ((theme: ThemeVariants | ThemeVariantsFunc) => void) | (() => void)
  switchTheme: () => void
  lang: TLang
  setLanguage: (name: TLang) => void
}

export const SettingsContext = React.createContext<SettingsContextProps>({
  themeName: 'light',
  get theme(): ITheme {
    return ThemeArguments[this.themeName]
  },
  setTheme: () => {},
  switchTheme: () => {},
  lang: 'en',
  setLanguage: () => {},
})

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeVariants>((settings.theme ?? 'light') as ThemeVariants)
  const [lang, setLanguage] = React.useState<TLang>('en')

  const setTheme = (theme: ThemeVariants | ThemeVariantsFunc) => {
    const newTheme = theme instanceof Function ? theme(currentTheme) : theme
    setCurrentTheme(newTheme)
    store.set('settings.theme', newTheme)
  }

  const switchTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

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
