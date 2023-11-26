import styled, { css, RuleSet } from 'styled-components'
import { TThemeVariants } from '~/types/settings'
import footerImg from '~/assets/bg_footer.svg'

export const Footer = () => {
  return (
    <StFooter>
      <StFooterBg />
      <StAboutWrap>
        <a href="https://github.com/WDL-Team">WDL-Team</a>
        <div>© 2023</div>
      </StAboutWrap>
      <span>Footer</span>
    </StFooter>
  )
}

const StFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
`
const StAboutWrap = styled.div`
  z-index: 1;
  margin: auto 1rem 1rem auto;
  text-align: center;

  & a {
    color: inherit;
  }
`
const filter: Record<TThemeVariants, RuleSet> = {
  dark: css``,
  light: css`
    filter: invert(100%) sepia(60%);
  `,
}
const StFooterBg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 12rem;
  background-image: url(${footerImg});
  background-size: cover;
  ${props => props.theme.name === 'light' && filter.light};
  z-index: 0;
`
