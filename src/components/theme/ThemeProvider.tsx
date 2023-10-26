import React from 'react'
import { ThemeArguments, ITheme, ThemeVariants } from '../../const/theme'
import { ThemeProvider as StThemeProvider } from 'styled-components'
import Store from '../../utils/Store'
import { ISettings } from '../../types/settings'

const store = new Store()
const settings = store.get('settings') as ISettings

interface ThemeContextProps {
  themeName: ThemeVariants
  theme: ITheme
  setTheme: ((newTheme: ThemeVariants) => void) | null
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeName: 'light',
  get theme(): ITheme {
    return ThemeArguments[this.themeName]
  },
  setTheme: null,
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeVariants>((settings.theme ?? 'light') as ThemeVariants)

  const setTheme = (newTheme: ThemeVariants) => {
    setCurrentTheme(newTheme)
    store.set('settings.theme', newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        themeName: currentTheme,
        theme: ThemeArguments[currentTheme],
        setTheme,
      }}>
      <StThemeProvider theme={ThemeArguments[currentTheme]}>{children}</StThemeProvider>
    </ThemeContext.Provider>
  )
}
