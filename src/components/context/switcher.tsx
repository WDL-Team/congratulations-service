import styled from 'styled-components'
import { useSettings } from '.'
import iconDark from '~/assets/crescent-moon.svg'
import iconLight from '~/assets/sun-shape.svg'

export const ThemeSwitcher = () => {
  const { switchTheme } = useSettings()

  return (
    <StSwitchContainer onClick={switchTheme}>
      <StIcon name="dark" />
      <StIcon name="light" />
      <StSwitchToggle />
    </StSwitchContainer>
  )
}

const StSwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.tertiary : theme.colors.accent)};
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`
const StSwitchToggle = styled.div`
  margin-top: 2px;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  transform: translateX(${props => (props.theme.name === 'dark' ? '26px' : '2px')});
  transition: transform 0.2s ease-in-out;
`
const StIcon = styled.div<{ name: string }>`
  position: absolute;
  top: 3px;
  left: ${props => (props.name === 'dark' ? '3px' : 'auto')};
  right: ${props => (props.name === 'light' ? '3px' : 'auto')};
  width: 18px;
  height: 18px;
  background-image: url(${props => (props.theme.name === 'dark' ? iconDark : iconLight)});
  background-size: cover;
`
