import styled, { css, RuleSet } from 'styled-components'
import { ThemeVariants } from '~/const/theme'
import { ThemeSwitcher } from '../context'
import logoImg from '~/assets/logo.svg'
import headerImg from '~/assets/bg_header.svg'

export const Header = () => {
  return (
    <StHeader>
      <StHeaderBg />
      <StLogoWrap>
        <StLogo />
        <h3 style={{ display: 'inline' }}>Congratulations service</h3>
      </StLogoWrap>
      <ThemeSwitcher />
    </StHeader>
  )
}

const StHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.text};
`
const StLogoWrap = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`
const filter: Record<ThemeVariants, RuleSet> = {
  dark: css``,
  light: css`
    background-blend-mode: color-dodge;
    background-color: ${props => props.theme.colors.primary};
  `,
}
const StLogo = styled.div`
  background-image: url(${logoImg});
  background-size: contain;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background-color: ${props => props.theme.colors.primary};
`
const StHeaderBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 12rem;
  background-image: url(${headerImg});
  background-size: cover;
  ${props => props.theme.name === 'light' && filter.light};
  z-index: 0;
`
