import { styled } from 'styled-components'
import { ThemeSwitcher } from '../context'

export const Header = () => {
  return (
    <StHeader>
      <h3>Congratulations service</h3>
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
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
`
