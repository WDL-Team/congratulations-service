export type ThemeVariants = 'dark' | 'light'

export interface ITheme {
  name: string
  colors: Record<string, string>
}

export const ThemeArguments: { [key in ThemeVariants]: ITheme } = {
  light: {
    name: 'light',
    colors: {
      primary: '#FFDD87',
      secondary: '#FFF',
      tertiary: '#E4640A',
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
      tertiary: '#294383',
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