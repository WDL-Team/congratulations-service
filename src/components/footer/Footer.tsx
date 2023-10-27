import { styled } from 'styled-components'

export const Footer = () => {
  return (
    <StFooter>
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
  padding: 0 4rem;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
`
