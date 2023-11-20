export type TThemeVariants = 'dark' | 'light'

export const supportedLanguages = ['en', 'ru']

export type TLanguage = 'en' | 'ru'

export type TSettings = {
  theme?: string
  lang?: TLanguage
}

export const defaultValues: { theme: TThemeVariants; language: TLanguage } = {
  theme: 'light',
  language: 'en',
}

type TColors = 'primary' | 'secondary' | 'tertiary' | 'invert' | 'accent' | 'error' | 'disabled' | 'focus' | 'link' | 'text'

export interface ITheme {
  name: TThemeVariants
  colors: Record<TColors, string>
}
