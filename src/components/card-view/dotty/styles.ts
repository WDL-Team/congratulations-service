import styled, { css, RuleSet } from 'styled-components'
import { TThemeVariants } from '~/types/settings'
import bgImage from './assets/bg.svg'

const filter: Record<TThemeVariants, RuleSet> = {
  dark: css`
    background-blend-mode: color-burn;
    background-color: #448;
  `,
  light: css`
    background-blend-mode: luminosity;
    background-color: ${props => props.theme.colors.primary};
  `,
}
export const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  ${props => filter[props.theme.name]};

  > div {
    width: fit-content;
  }
`

export const particles: Record<string, string> = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '0',
}
