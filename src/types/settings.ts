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
