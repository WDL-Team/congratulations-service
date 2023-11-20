import { defaultValues } from '~/types/settings'
import type { TLanguage, TThemeVariants } from '~/types/settings'

export const getSytemTheme = (): TThemeVariants => {
  let theme = defaultValues.theme
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark'
  return theme
}

export const getSystemLanguage = (): TLanguage => {
  let language = defaultValues.language
  if (typeof navigator !== 'undefined' && navigator.language) language = navigator.language.slice(0, 2) as TLanguage
  return language
}
