import styled, { css, RuleSet } from 'styled-components'
import { TThemeVariants } from '~/types/settings'
import { ThemeSwitcher } from '../context'
import { LanguageSelector } from '@/context/selector'
import { useLocalization } from '~/hooks/useLocalization'
import logoImg from '~/assets/logo.svg'
import headerImg from '~/assets/bg_header.svg'

export const Header = () => {
  const { loc } = useLocalization()

  return (
    <StHeader>
      <StHeaderBg />
      <StGroupWrap>
        <StLogo />
        <h3>{loc('display_name')}</h3>
      </StGroupWrap>
      <StGroupWrap>
        <LanguageSelector />
        <ThemeSwitcher />
      </StGroupWrap>
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
const StGroupWrap = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`
const filter: Record<TThemeVariants, RuleSet> = {
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
