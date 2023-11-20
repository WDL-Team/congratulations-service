import type { TThemeVariants } from '~/types/settings'

type TColors = 'primary' | 'secondary' | 'tertiary' | 'invert' | 'accent' | 'error' | 'disabled' | 'focus' | 'link' | 'text'

export type TTheme = {
  name: TThemeVariants
  colors: Record<TColors, string>
}

export const ThemeArguments: { [key in TThemeVariants]: TTheme } = {
  light: {
    name: 'light',
    colors: {
      primary: '#FFDD87',
      secondary: '#FFF',
      tertiary: '#fdca48',
      invert: '#000',
      accent: '#E4640A',
      error: '#F00',
      disabled: '#E7A679',
      focus: '#808080',
      link: '#170A01',
      text: '#000',
    },
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#294383',
      secondary: '#233153',
      tertiary: '#677496',
      invert: '#FFF',
      accent: '#6D96FF',
      error: '#F00',
      disabled: '#87CEEB',
      focus: '#808080',
      link: '#EAECF3',
      text: '#FFF',
    },
  },
} as const
