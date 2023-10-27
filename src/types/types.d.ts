import 'styled-components'
import { ITheme } from '../const/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}
