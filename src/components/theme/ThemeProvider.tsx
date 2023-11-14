import React from 'react'
import { ThemeArguments, ITheme, ThemeVariants } from '../../const/theme'
import { ThemeProvider as StThemeProvider } from 'styled-components'
import Store from '../../utils/Store'
import { ISettings } from '../../types/settings'

const store = new Store()
const settings = store.get('settings') as ISettings

type ThemeVariantsFunc = (theme: ThemeVariants) => ThemeVariants

interface ThemeContextProps {
  themeName: ThemeVariants
  theme: ITheme
  setTheme: ((theme: ThemeVariants | ThemeVariantsFunc) => void) | (() => void)
  switchTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeName: 'light',
  get theme(): ITheme {
    return ThemeArguments[this.themeName]
  },
  setTheme: () => {},
  switchTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeVariants>((settings.theme ?? 'light') as ThemeVariants)

  const setTheme = (theme: ThemeVariants | ThemeVariantsFunc) => {
    const newTheme = theme instanceof Function ? theme(currentTheme) : theme
    setCurrentTheme(newTheme)
    store.set('settings.theme', newTheme)
  }

  const switchTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider
      value={{
        themeName: currentTheme,
        theme: ThemeArguments[currentTheme],
        setTheme,
        switchTheme,
      }}>
      <StThemeProvider theme={ThemeArguments[currentTheme]}>{children}</StThemeProvider>
    </ThemeContext.Provider>
  )
}
